/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetTokensTokenActivityV3SortBy } from './getTokensTokenActivityV3SortBy';
import type { GetTokensTokenActivityV3TypesItem } from './getTokensTokenActivityV3TypesItem';

export type GetTokensTokenActivityV3Params = {
/**
 * Amount of items returned in response.
 */
limit?: number;
/**
 * Order the items are returned in the response, eventTimestamp = The blockchain event time, createdAt - The time in which event was recorded
 */
sortBy?: GetTokensTokenActivityV3SortBy;
/**
 * If true, metadata is included in the response.
 */
includeMetadata?: boolean;
/**
 * Use continuation token to request next offset of items.
 */
continuation?: string;
types?: GetTokensTokenActivityV3TypesItem[];
};
