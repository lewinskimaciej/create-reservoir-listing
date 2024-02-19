/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */

export type GetCollectionsCollectionAttributesExploreV5Params = {
/**
 * Filter to a particular token-id. Example: `1`
 */
tokenId?: string;
/**
 * If true, top bid will be returned in the response.
 */
includeTopBid?: boolean;
/**
 * If true, range traits will be excluded from the response.
 */
excludeRangeTraits?: boolean;
/**
 * If true, number traits will be excluded from the response.
 */
excludeNumberTraits?: boolean;
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
 * Use continuation token to request next offset of items.
 */
continuation?: string;
/**
 * Amount of items returned in response. Default limit is 20. Max limit is 5000.
 */
limit?: number;
};