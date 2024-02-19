/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetTokensIdsV1FlagStatus } from './getTokensIdsV1FlagStatus';

export type GetTokensIdsV1Params = {
/**
 * Filter to a particular collection with collection-id. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
collection?: string;
/**
 * Filter to a particular contract. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
contract?: string;
/**
 * Filter to a particular token set. Example: `token:CONTRACT:TOKEN_ID` representing a single token within contract, `contract:CONTRACT` representing a whole contract, `range:CONTRACT:START_TOKEN_ID:END_TOKEN_ID` representing a continuous token id range within a contract and `list:CONTRACT:TOKEN_IDS_HASH` representing a list of token ids within a contract.
 */
tokenSetId?: string;
/**
 * -1 = All tokens (default)
0 = Non flagged tokens
1 = Flagged tokens
 */
flagStatus?: GetTokensIdsV1FlagStatus;
/**
 * Amount of items returned in response. Max limit is 10,000.
 */
limit?: number;
/**
 * Use continuation token to request next offset of items.
 */
continuation?: string;
};