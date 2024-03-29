/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetTokensDetailsV4SortBy } from './getTokensDetailsV4SortBy';
import type { GetTokensDetailsV4SortDirection } from './getTokensDetailsV4SortDirection';

export type GetTokensDetailsV4Params = {
/**
 * Filter to a particular collection with collection-id. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
collection?: string;
/**
 * Filter to a particular contract. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
contract?: string;
/**
 * Array of tokens. Example: `tokens[0]: 0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:704 tokens[1]: 0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:979`
 */
tokens?: string[];
/**
 * Filter to a particular token set. `Example: token:0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:129000685`
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
 * Order the items are returned in the response.
 */
sortBy?: GetTokensDetailsV4SortBy;
sortDirection?: GetTokensDetailsV4SortDirection;
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
