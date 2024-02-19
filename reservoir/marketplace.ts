import {GetExecuteListV5Response, Model455, Model508, PostOrderV4Response} from "./reservoir.types.generated";
import {ReservoirService} from "./reservoir.service";
import Openfort, {SignPayloadRequest, SignPayloadResponse} from "@openfort/openfort-node";
import {hashTypedData} from "viem";

export class Marketplace {
    private readonly openfort: Openfort;
    private readonly reservoirService: ReservoirService;

    constructor() {
        this.reservoirService = new ReservoirService();
        this.openfort = new Openfort(process.env.OPENFORT_PRIVATE_KEY!);

    }
    public async listAsset(sellerOpenfortId: string) {

        // ignore profile checks, assume it exists
        const profile = await this.openfort.players.get({id: sellerOpenfortId});
        const sellerAccountAddress = profile!.accounts![0].address

        // ignore token balance checks for simplicity
        // ignore seaport contract approval too

        const steps: Model508[] = [];

        let getExecuteListingResponse: GetExecuteListV5Response;
        // get the data to sign
        getExecuteListingResponse = await this.reservoirService.getListingSteps({
            "maker": sellerAccountAddress,
            "token": "0xd717CC9f5F68BBc4f0bEE120b26004bfd65f272e:0",
            "quantity": 1,
            "weiPrice": "1000000000000000",
            "orderKind": "seaport-v1.5",
            "currency": "0x0000000000000000000000000000000000000000",
            "listingTime": 1708331093009,
            "expirationTime": 1708935893009,
            "chainId": 13337
        });

        if (getExecuteListingResponse.steps?.length)
            steps.push(...getExecuteListingResponse.steps);
        if (getExecuteListingResponse.errors?.length) {
            throw new Error(`Encountered errors when getting payload to sign from Reservoir: [${getExecuteListingResponse.errors
                .map((e) => e.message)
                .join(', ')}]`);
        }

        // get data for signing
        const {domain, types, value, primaryType, hash} =
            this.getSigningPayloadFromReservoir(steps);

        let signature: string | null = null;

        let signatureResponse: SignPayloadResponse;
        try {
            // sign the order
            signatureResponse = await this.openfort.accounts.signPayload({
                id: sellerOpenfortId,
                hash,
                domain,
                types,
                primaryType,
                value,
            });
        } catch (error: any) {
            throw new Error('Signing payload to listAsset');
        }

        if (!signatureResponse?.signature) {
            throw new Error(`Signing payload response to listAsset does not contain signature: ${JSON.stringify(signatureResponse)}`);
        }

        signature = signatureResponse.signature;

        let createListingResponse: PostOrderV4Response;
        try {
            // confirm listing
            createListingResponse = await this.reservoirService.createOrders({
                items: [
                    {
                        order: {
                            data: value,
                            kind: 'seaport-v1.5',
                        },
                    },
                ],
                signature: signature,
            });
        } catch (error: any) {
            throw new Error('Failed to publish signed order');
        }

        if (!createListingResponse.results?.[0]?.orderId) {
            throw new Error('Asset listing failed');
        }

        return {
            orderId: createListingResponse.results[0].orderId,
        };
    }

    private getSigningPayloadFromReservoir(steps?: Model455) {
        const orderSignatureStep = steps?.find(
            (step) =>
                step.id === 'order-signature' &&
                step.items.some((item) => item.status === 'incomplete'),
        );

        if (!orderSignatureStep) {
            throw new Error('No order data');
        }

        const rawOrder = orderSignatureStep.items.find(
            (item) => item.status === 'incomplete',
        );

        const types: SignPayloadRequest['types'] = rawOrder?.data?.sign?.types;
        const value: SignPayloadRequest['value'] = rawOrder?.data?.sign?.value;

        const primaryType: string = rawOrder?.data?.sign?.primaryType;

        const domain: any = rawOrder?.data?.sign?.domain;

        // remove unnecessary data from seaport order object
        value.kind = undefined;
        value.signature = undefined;

        if (!domain || !types || !value || !primaryType) {
            throw new Error('Invalid order data for signature');
        }

        const hash = hashTypedData({
            types: {
                OfferItem: types.OfferItem,
                ConsiderationItem: types.ConsiderationItem,
                OrderComponents: types.OrderComponents,
                EIP712Domain: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'version',
                        type: 'string',
                    },
                    {
                        name: 'chainId',
                        type: 'uint256',
                    },
                    {
                        name: 'verifyingContract',
                        type: 'address',
                    },
                ],
            },
            domain: domain as any,
            primaryType: primaryType as any,
            message: value,
        });

        return {
            domain,
            types,
            value,
            primaryType,
            hash,
        };
    }
}