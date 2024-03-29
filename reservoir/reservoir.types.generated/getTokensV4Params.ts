/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetTokensV4SortBy } from './getTokensV4SortBy';
import type { GetTokensV4SortDirection } from './getTokensV4SortDirection';

export type GetTokensV4Params = {
/**
 * Filter to a particular collection with collection-id. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
collection?: string;
/**
 * Filter to a particular contract. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
contract?: string;
/**
 * Array of tokens. Example: `tokens[0]: 0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:704tokens[1]: 0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:979`
 */
tokens?: string[];
/**
 * Filter to a particular token set. Example: token:0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:129000685
 */
tokenSetId?: string;
/**
 * Filter to a particular attribute. Example: `attributes[Type]=Original`
 */
attributes?: string;
/**
 * Domain of the order source. Example `opensea.io`
 */
source?: string;
/**
 * If true, results will filter only Reservoir orders.
 */
native?: boolean;
/**
 * Order the items are returned in the response, by default sorted by `floorAskPrice`. Not supported when filtering by `contract`. When filtering by `contract` the results are sorted by `tokenId` by default.
 */
sortBy?: GetTokensV4SortBy;
sortDirection?: GetTokensV4SortDirection;
/**
 * Amount of items returned in response.
 */
limit?: number;
/**
 * If true, top bid will be returned in the response.
 */
includeTopBid?: boolean;
/**
 * Use continuation token to request next offset of items.
 */
continuation?: string;
};
