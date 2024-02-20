import getUuidByString from "uuid-by-string";
import {StaticJsonRpcProvider} from "@ethersproject/providers";
import {Interface} from "@ethersproject/abi";
import {Contract} from "@ethersproject/contracts";
import {_TypedDataEncoder} from "@ethersproject/hash";

/// This is a copy of Reservoir's validation logic, reduced down to the case we know that fails.
export class SignatureValidator {
    // Use a static provider to avoid redundant `eth_chainId` calls
    private provider: StaticJsonRpcProvider;

    constructor() {
        this.provider = new StaticJsonRpcProvider(
            {
                url: process.env.BASE_NETWORK_HTTP_URL!,
                headers: {
                    "x-session-hash": getUuidByString(`${process.env.BASE_NETWORK_HTTP_URL}13337`),
                },
            },
            13337
        );
    }

    public async checkSignature(params: { [p: string]: any }, signature: string) {
        if (!this.provider) {
            throw new Error(`Invalid signature. No provider given.`);
        }

        const eip712Hash = _TypedDataEncoder.hash(
            {
                name: "Seaport",
                version: "1.5",
                chainId: 13337,
                verifyingContract: "0x00000000000000adc04c56bf30ac9d3c0aaf14dc",    // Beam Testnet Seaport contract
            },
            ORDER_EIP712_TYPES,
            params
        );

        const iface = new Interface([
            "function isValidSignature(bytes32 digest, bytes signature) view returns (bytes4)",
        ]);

        const result = await new Contract(params.offerer, iface, this.provider).isValidSignature(
            eip712Hash,
            signature
        );
        const sigHash = iface.getSighash("isValidSignature");
        if (result !== sigHash) {
            throw new Error(`Invalid signature. Failed on getSighash("isValidSignature"). Result: ${result}, sigHash: ${sigHash}, offerer: ${params.offerer}, signature: ${signature}, eip712Hash: ${eip712Hash}`);
        }
    }
}

export const ORDER_EIP712_TYPES = {
    OrderComponents: [
        { name: "offerer", type: "address" },
        { name: "zone", type: "address" },
        { name: "offer", type: "OfferItem[]" },
        { name: "consideration", type: "ConsiderationItem[]" },
        { name: "orderType", type: "uint8" },
        { name: "startTime", type: "uint256" },
        { name: "endTime", type: "uint256" },
        { name: "zoneHash", type: "bytes32" },
        { name: "salt", type: "uint256" },
        { name: "conduitKey", type: "bytes32" },
        { name: "counter", type: "uint256" },
    ],
    OfferItem: [
        { name: "itemType", type: "uint8" },
        { name: "token", type: "address" },
        { name: "identifierOrCriteria", type: "uint256" },
        { name: "startAmount", type: "uint256" },
        { name: "endAmount", type: "uint256" },
    ],
    ConsiderationItem: [
        { name: "itemType", type: "uint8" },
        { name: "token", type: "address" },
        { name: "identifierOrCriteria", type: "uint256" },
        { name: "startAmount", type: "uint256" },
        { name: "endAmount", type: "uint256" },
        { name: "recipient", type: "address" },
    ],
};
