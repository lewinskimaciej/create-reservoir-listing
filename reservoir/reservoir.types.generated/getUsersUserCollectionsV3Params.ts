/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */

export type GetUsersUserCollectionsV3Params = {
/**
 * Filter to a particular community. Example: `artblocks`
 */
community?: string;
/**
 * Filter to a particular collection set. Example: `8daa732ebe5db23f267e58d52f1c9b1879279bcdf4f78b8fb563390e6946ea65`
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
 * If true, will filter any collections marked as spam.
 */
excludeSpam?: boolean;
/**
 * Use offset to request the next batch of items. Max is 10,000.
 */
offset?: number;
/**
 * Amount of items returned in response. max limit is 100.
 */
limit?: number;
/**
 * Input any ERC20 address to return result in given currency. Applies to `topBid` and `floorAsk`.
 */
displayCurrency?: string;
};
