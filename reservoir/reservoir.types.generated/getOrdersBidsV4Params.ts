/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetOrdersBidsV4SortBy } from './getOrdersBidsV4SortBy';

export type GetOrdersBidsV4Params = {
ids?: string;
/**
 * Filter to a particular token. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:123`
 */
token?: string;
/**
 * Filter to a particular set. Example: `contract:0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63` or `token:0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:1`
 */
tokenSetId?: string;
/**
 * Filter to a particular user. Example: `0xF296178d553C8Ec21A2fBD2c5dDa8CA9ac905A00`
 */
maker?: string;
/**
 * Filter to a particular community. Example: `artblocks`
 */
community?: string;
/**
 * Filter to a particular collection bids with collection-id. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
collection?: string;
/**
 * Filter to a particular attribute within a collection. Example: `attribute[Mouth]=Bored` (Collection must be passed as well when filtering by attribute)
 */
attribute?: string;
/**
 * Filter to an array of contracts. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
contracts?: string[];
/**
 * active = currently valid
inactive = temporarily invalid
expired, cancelled, filled = permanently invalid

Available when filtering by maker, otherwise only valid orders will be returned
 */
status?: string;
/**
 * Filter to a source by domain. Example: `opensea.io`
 */
source?: string;
/**
 * If true, results will filter only Reservoir orders.
 */
native?: boolean;
/**
 * If true, metadata is included in the response.
 */
includeMetadata?: boolean;
/**
 * If true, raw data is included in the response.
 */
includeRawData?: boolean;
/**
 * If true, prices will include missing royalties to be added on-top.
 */
normalizeRoyalties?: boolean;
/**
 * Order the items are returned in the response, Sorting by price allowed only when filtering by token
 */
sortBy?: GetOrdersBidsV4SortBy;
/**
 * Use continuation token to request next offset of items.
 */
continuation?: string;
/**
 * Amount of items returned in response.
 */
limit?: number;
/**
 * Return result in given currency
 */
displayCurrency?: string;
};
