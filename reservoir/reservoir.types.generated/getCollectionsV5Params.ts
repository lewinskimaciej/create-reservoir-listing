/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetCollectionsV5SortBy } from './getCollectionsV5SortBy';

export type GetCollectionsV5Params = {
/**
 * Filter to a particular collection with collection id. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
id?: string;
/**
 * Filter to a particular collection slug. Example: `boredapeyachtclub`
 */
slug?: string;
/**
 * Filter to a particular collection set. Example: `8daa732ebe5db23f267e58d52f1c9b1879279bcdf4f78b8fb563390e6946ea65`
 */
collectionsSetId?: string;
/**
 * Filter to a particular community. Example: `artblocks`
 */
community?: string;
contract?: string[];
/**
 * Search for collections that match a string. Example: `bored`
 */
name?: string;
/**
 * Maximum floor price of the collection
 */
maxFloorAskPrice?: number;
/**
 * Minumum floor price of the collection
 */
minFloorAskPrice?: number;
/**
 * If true, top bid will be returned in the response.
 */
includeTopBid?: boolean;
/**
 * If true, attributes will be included in the response. Must filter by `id` or `slug` to a particular collection.
 */
includeAttributes?: boolean;
/**
 * If true, sales count (1 day, 7 day, 30 day, all time) will be included in the response. Must filter by `id` or `slug` to a particular collection.
 */
includeSalesCount?: boolean;
/**
 * If true, mint data for the collection will be included in the response.
 */
includeMintStages?: boolean;
/**
 * If true, prices will include missing royalties to be added on-top.
 */
normalizeRoyalties?: boolean;
/**
 * If true, return the non flagged floor ask. Supported only when `normalizeRoyalties` is false.
 */
useNonFlaggedFloorAsk?: boolean;
/**
 * Order the items are returned in the response. Options are `#DayVolume`, `createdAt`, or `floorAskPrice`
 */
sortBy?: GetCollectionsV5SortBy;
/**
 * Amount of items returned in response. Default and max limit is 20.
 */
limit?: number;
/**
 * Use continuation token to request next offset of items.
 */
continuation?: string;
/**
 * Input any ERC20 address to return result in given currency
 */
displayCurrency?: string;
};
