/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetTokensTokenActivityV4SortBy } from './getTokensTokenActivityV4SortBy';
import type { GetTokensTokenActivityV4TypesItem } from './getTokensTokenActivityV4TypesItem';

export type GetTokensTokenActivityV4Params = {
/**
 * Amount of items returned in response.
 */
limit?: number;
/**
 * Order the items are returned in the response, eventTimestamp = The blockchain event time, createdAt - The time in which event was recorded
 */
sortBy?: GetTokensTokenActivityV4SortBy;
/**
 * If true, metadata is included in the response.
 */
includeMetadata?: boolean;
/**
 * Use continuation token to request next offset of items.
 */
continuation?: string;
types?: GetTokensTokenActivityV4TypesItem[];
};
