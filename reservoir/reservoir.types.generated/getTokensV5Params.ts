/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetTokensV5FlagStatus } from './getTokensV5FlagStatus';
import type { GetTokensV5SortBy } from './getTokensV5SortBy';
import type { GetTokensV5SortDirection } from './getTokensV5SortDirection';

export type GetTokensV5Params = {
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
 * Filter to a particular contract. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
contract?: string;
/**
 * Filter to a particular token by name. Example: `token #1`
 */
tokenName?: string;
/**
 * Array of tokens. Example: `tokens[0]: 0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:704 tokens[1]: 0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:979`
 */
tokens?: string[];
/**
 * Filter to a particular token set. Example: `token:CONTRACT:TOKEN_ID` representing a single token within contract, `contract:CONTRACT` representing a whole contract, `range:CONTRACT:START_TOKEN_ID:END_TOKEN_ID` representing a continuous token id range within a contract and `list:CONTRACT:TOKEN_IDS_HASH` representing a list of token ids within a contract.
 */
tokenSetId?: string;
/**
 * Filter to a particular attribute. Note: Our docs do not support this parameter correctly. To test, you can use the following URL in your browser. Example: `https://api.reservoir.tools/tokens/v5?collection=0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63&attributes[Type]=Original` or `https://api.reservoir.tools/tokens/v5?collection=0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63&attributes[Type]=Original&attributes[Type]=Sibling`
 */
attributes?: string;
/**
 * Domain of the order source. Example `opensea.io` (Only listed tokens are returned when filtering by source)
 */
source?: string;
/**
 * Domain of the order source. Example `www.apecoinmarketplace.com`. For a native marketplace, return all tokens listed on this marketplace, even if better prices are available on other marketplaces.
 */
nativeSource?: string;
/**
 * Get tokens with a min rarity rank (inclusive)
 */
minRarityRank?: number;
/**
 * Get tokens with a max rarity rank (inclusive)
 */
maxRarityRank?: number;
/**
 * Get tokens with a min floor ask price (inclusive)
 */
minFloorAskPrice?: number;
/**
 * Get tokens with a max floor ask price (inclusive)
 */
maxFloorAskPrice?: number;
/**
 * Allowed only with collection and tokens filtering!
-1 = All tokens (default)
0 = Non flagged tokens
1 = Flagged tokens
 */
flagStatus?: GetTokensV5FlagStatus;
/**
 * Order the items are returned in the response.
 */
sortBy?: GetTokensV5SortBy;
sortDirection?: GetTokensV5SortDirection;
/**
 * Filter to tokens with a listing in a particular currency. `Example: currencies[0]: 0x0000000000000000000000000000000000000000`
 */
currencies?: string[];
/**
 * Amount of items returned in response.
 */
limit?: number;
/**
 * If true, top bid will be returned in the response.
 */
includeTopBid?: boolean;
/**
 * If true, attributes will be returned in the response.
 */
includeAttributes?: boolean;
/**
 * If true, quantity filled and quantity remaining will be returned in the response.
 */
includeQuantity?: boolean;
/**
 * If true, dynamic pricing data will be returned in the response.
 */
includeDynamicPricing?: boolean;
/**
 * If true, a boolean indicating whether royalties were paid on a token's last sale will be returned in the response.
 */
includeRoyaltiesPaid?: boolean;
/**
 * If true, prices will include missing royalties to be added on-top.
 */
normalizeRoyalties?: boolean;
/**
 * Use continuation token to request next offset of items.
 */
continuation?: string;
/**
 * Return result in given currency
 */
displayCurrency?: string;
};
