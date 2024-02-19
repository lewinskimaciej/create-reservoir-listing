/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetCollectionsCollectionAttributesExploreV2SortBy } from './getCollectionsCollectionAttributesExploreV2SortBy';

export type GetCollectionsCollectionAttributesExploreV2Params = {
/**
 * Filter to a particular attribute key. Example: `Composition`
 */
attributeKey?: string;
/**
 * Max number of items returned in the response.
 */
maxFloorAskPrices?: number;
/**
 * Max number of items returned in the response.
 */
maxLastSells?: number;
/**
 * Order the items are returned in the response.
 */
sortBy?: GetCollectionsCollectionAttributesExploreV2SortBy;
/**
 * Use offset to request the next batch of items.
 */
offset?: number;
/**
 * Amount of items returned in response.
 */
limit?: number;
};
