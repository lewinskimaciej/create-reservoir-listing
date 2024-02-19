import {Model422Kind, Model503OrderKind} from "./reservoir.types.generated";
import {getBeamReservoirAPI} from "./reservoir.api.generated";

export class ReservoirService {
    public async getListingSteps(input: {
        quantity: number;
        weiPrice: string;
        chainId: number;
        orderKind: Model503OrderKind;
        listingTime: number;
        expirationTime: number;
        maker: string;
        currency: string;
        token: string;
    }) {
        return await getBeamReservoirAPI().postExecuteListV5(
            {
                maker: input.maker,
                params: [
                    {
                        token: input.token,
                        quantity: input.quantity,
                        weiPrice: input.weiPrice,
                        orderKind: input.orderKind,
                        currency: input.currency,

                        // times in reservoir are based on seconds, so we have to change from ms
                        listingTime: Math.floor(0.001 * input.listingTime).toString(),
                        expirationTime: Math.floor(0.001 * input.expirationTime).toString(),
                    },
                ],
            },
            this.getBaseUrl(),
        );
    }

    public async createOrders(input: {
        signature: string;
        items: { order: { data: { [p: string]: any }; kind: Model422Kind } }[];
    }) {
        return await getBeamReservoirAPI().postOrderV4(
            {
                items: input.items,
            },
            { signature: input.signature },
            this.getBaseUrl(),
        );
    }


    private getBaseUrl() {
        return {
            baseURL: process.env.RESERVOIR_BASE_URL
        }
    }
}