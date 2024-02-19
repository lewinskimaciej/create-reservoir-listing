/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetEventsTokensFlooraskV4SortDirection } from './getEventsTokensFlooraskV4SortDirection';

export type GetEventsTokensFlooraskV4Params = {
contract?: string;
/**
 * Filter to a particular token, e.g. `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:123`
 */
token?: string;
/**
 * Get events after a particular unix timestamp (inclusive)
 */
startTimestamp?: number;
/**
 * Get events before a particular unix timestamp (inclusive)
 */
endTimestamp?: number;
sortDirection?: GetEventsTokensFlooraskV4SortDirection;
/**
 * If true, prices will include missing royalties to be added on-top.
 */
normalizeRoyalties?: boolean;
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
