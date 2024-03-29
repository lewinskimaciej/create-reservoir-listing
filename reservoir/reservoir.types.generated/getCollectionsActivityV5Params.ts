/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetCollectionsActivityV5SortBy } from './getCollectionsActivityV5SortBy';
import type { GetCollectionsActivityV5TypesItem } from './getCollectionsActivityV5TypesItem';

export type GetCollectionsActivityV5Params = {
/**
 * Filter to a particular collection with collection-id. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
collection?: string;
/**
 * Filter to a particular collection set.
 */
collectionsSetId?: string;
/**
 * Filter to a particular community. Example: `artblocks`
 */
community?: string;
/**
 * Filter to a particular attribute. Example: `attributes[Type]=Original`
 */
attributes?: string;
/**
 * Amount of items returned in response. If `includeMetadata=true` max limit is 50, otherwise max limit is 1,000.
 */
limit?: number;
/**
 * Order the items are returned in the response, eventTimestamp = The blockchain event time, createdAt - The time in which event was recorded
 */
sortBy?: GetCollectionsActivityV5SortBy;
/**
 * Use continuation token to request next offset of items.
 */
continuation?: string;
/**
 * If true, metadata is included in the response.
 */
includeMetadata?: boolean;
types?: GetCollectionsActivityV5TypesItem[];
};
