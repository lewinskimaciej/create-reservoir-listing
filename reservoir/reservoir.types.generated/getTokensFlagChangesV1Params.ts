/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetTokensFlagChangesV1FlagStatus } from './getTokensFlagChangesV1FlagStatus';

export type GetTokensFlagChangesV1Params = {
/**
 * -1 = All tokens (default)
0 = Non flagged tokens
1 = Flagged tokens
 */
flagStatus?: GetTokensFlagChangesV1FlagStatus;
/**
 * Amount of items returned in response. Max is 200.
 */
limit?: number;
/**
 * Use continuation token to request next offset of items.
 */
continuation?: string;
};