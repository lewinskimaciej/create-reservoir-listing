/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetOrdersBidsV6SortBy } from './getOrdersBidsV6SortBy';

export type GetOrdersBidsV6Params = {
ids?: string[];
/**
 * Filter to a particular token. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:123`
 */
token?: string;
/**
 * Filter to a particular set. Example: `token:CONTRACT:TOKEN_ID` representing a single token within contract, `contract:CONTRACT` representing a whole contract, `range:CONTRACT:START_TOKEN_ID:END_TOKEN_ID` representing a continuous token id range within a contract and `list:CONTRACT:TOKEN_IDS_HASH` representing a list of token ids within a contract.
 */
tokenSetId?: string;
/**
 * Filter to a particular user. Must set `sources=blur.io` to reveal maker's blur bids. Example: `0xF296178d553C8Ec21A2fBD2c5dDa8CA9ac905A00`
 */
maker?: string;
/**
 * Filter to a particular community. Example: `artblocks`
 */
community?: string;
/**
 * Filter to a particular collection set. Example: `8daa732ebe5db23f267e58d52f1c9b1879279bcdf4f78b8fb563390e6946ea65`
 */
collectionsSetId?: string;
/**
 * Filter to a particular contracts set.
 */
contractsSetId?: string;
/**
 * Filter to a particular collection bids with collection-id. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
collection?: string;
/**
 * Filter to a particular attribute. Note: Our docs do not support this parameter correctly. To test, you can use the following URL in your browser. Example: `https://api.reservoir.tools/orders/bids/v5?collection=0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63&attribute[Type]=Original` or `https://api.reservoir.tools/orders/bids/v5?collection=0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63&attribute[Type]=Original&attribute[Type]=Sibling`(Collection must be passed as well when filtering by attribute)
 */
attribute?: string;
/**
 * Filter to an array of contracts. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
contracts?: string[];
/**
 * activeª^º = currently valid
inactiveª^ = temporarily invalid
expiredª^, cancelledª^, filledª^ = permanently invalid
anyªº = any status
ª when an `id` is passed
^ when a `maker` is passed
º when a `contract` is passed
 */
status?: string;
sources?: string[];
/**
 * If true, results will filter only Reservoir orders.
 */
native?: boolean;
/**
 * If true, private orders are included in the response.
 */
includePrivate?: boolean;
/**
 * If true, criteria metadata is included in the response.
 */
includeCriteriaMetadata?: boolean;
/**
 * If true, raw data is included in the response. Set `sources=blur.io` and make this `true` to reveal individual blur bids.
 */
includeRawData?: boolean;
/**
 * If true, the depth of each order is included in the response.
 */
includeDepth?: boolean;
/**
 * Get events after a particular unix timestamp (inclusive)
 */
startTimestamp?: number;
/**
 * Get events before a particular unix timestamp (inclusive)
 */
endTimestamp?: number;
/**
 * Exclude orders that can only be filled by EOAs, to support filling with smart contracts.
 */
excludeEOA?: boolean;
excludeSources?: string[];
/**
 * If true, prices will include missing royalties to be added on-top.
 */
normalizeRoyalties?: boolean;
/**
 * Order the items are returned in the response. Sorting by `price` defaults sorting direction to descending. 
 */
sortBy?: GetOrdersBidsV6SortBy;
sortDirection?: string;
/**
 * Use continuation token to request next offset of items.
 */
continuation?: string;
/**
 * Amount of items returned in response. Max limit is 1000.
 */
limit?: number;
/**
 * Return result in given currency
 */
displayCurrency?: string;
};
