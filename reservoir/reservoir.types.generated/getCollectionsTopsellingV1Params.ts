/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetCollectionsTopsellingV1FillType } from './getCollectionsTopsellingV1FillType';

export type GetCollectionsTopsellingV1Params = {
/**
 * Start time in unix timestamp. Must be less than 2 weeks ago. defaults to 24 hours
 */
startTime?: number;
/**
 * End time in unix timestamp. defaults to now
 */
endTime?: number;
/**
 * Fill types to aggregate from (sale, mint, any)
 */
fillType?: GetCollectionsTopsellingV1FillType;
/**
 * Amount of items returned in response. Default is 25 and max is 50
 */
limit?: number;
/**
 * If true, 8 recent sales will be included in the response
 */
includeRecentSales?: boolean;
};
