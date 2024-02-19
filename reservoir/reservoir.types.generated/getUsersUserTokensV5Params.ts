/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetUsersUserTokensV5SortBy } from './getUsersUserTokensV5SortBy';
import type { GetUsersUserTokensV5SortDirection } from './getUsersUserTokensV5SortDirection';

export type GetUsersUserTokensV5Params = {
/**
 * Filter to a particular community, e.g. `artblocks`
 */
community?: string;
/**
 * Filter to a particular collection set.
 */
collectionsSetId?: string;
/**
 * Filter to a particular collection with collection-id. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
collection?: string;
/**
 * Filter to a particular contract, e.g. `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
contract?: string;
/**
 * Array of tokens. Example: `tokens[0]: 0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:704 tokens[1]: 0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:979`
 */
tokens?: string[];
/**
 * If true, prices will include missing royalties to be added on-top.
 */
normalizeRoyalties?: boolean;
/**
 * Order the items are returned in the response.
 */
sortBy?: GetUsersUserTokensV5SortBy;
/**
 * Order the items are returned in the response.
 */
sortDirection?: GetUsersUserTokensV5SortDirection;
/**
 * Use offset to request the next batch of items.
 */
offset?: number;
/**
 * Amount of items returned in response.
 */
limit?: number;
/**
 * If true, top bid will be returned in the response.
 */
includeTopBid?: boolean;
/**
 * Return result in given currency
 */
displayCurrency?: string;
};