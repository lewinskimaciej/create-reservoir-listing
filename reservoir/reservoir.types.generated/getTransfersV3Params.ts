/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetTransfersV3OrderBy } from './getTransfersV3OrderBy';

export type GetTransfersV3Params = {
/**
 * Filter to a particular contract, e.g. `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
contract?: string;
/**
 * Filter to a particular token, e.g. `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:123`
 */
token?: string;
/**
 * Filter to a particular collection, e.g. `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
collection?: string;
/**
 * Filter to a particular attribute. Note: Our docs do not support this parameter correctly. To test, you can use the following URL in your browser. Example: `https://api.reservoir.tools/transfers/v2?collection=0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63&attributes[Type]=Original` or `https://api.reservoir.tools/transfers/v2?collection=0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63&attributes[Type]=Original&attributes[Type]=Sibling`
 */
attributes?: string;
/**
 * Filter to a particular transaction. Example: `0x04654cc4c81882ed4d20b958e0eeb107915d75730110cce65333221439de6afc`
 */
txHash?: string;
/**
 * Order the items are returned in the response. Options are `timestamp`, and `updated_at`. Default is `timestamp`.
 */
orderBy?: GetTransfersV3OrderBy;
/**
 * Max limit is 100.
 */
limit?: number;
continuation?: string;
/**
 * Input any ERC20 address to return result in given currency
 */
displayCurrency?: string;
};
