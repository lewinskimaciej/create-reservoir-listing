/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetUsersUserCollectionsV2SortBy } from './getUsersUserCollectionsV2SortBy';
import type { GetUsersUserCollectionsV2SortDirection } from './getUsersUserCollectionsV2SortDirection';

export type GetUsersUserCollectionsV2Params = {
/**
 * Filter to a particular community. Example: `artblocks`
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
 * If true, top bid will be returned in the response.
 */
includeTopBid?: boolean;
/**
 * If true, number of tokens with bids will be returned in the response.
 */
includeLiquidCount?: boolean;
/**
 * Use offset to request the next batch of items.
 */
offset?: number;
/**
 * Amount of items returned in response.
 */
limit?: number;
/**
 * Order the items are returned in the response. Defaults to allTimeVolume
 */
sortBy?: GetUsersUserCollectionsV2SortBy;
/**
 * Order the items are returned in the response.
 */
sortDirection?: GetUsersUserCollectionsV2SortDirection;
};
