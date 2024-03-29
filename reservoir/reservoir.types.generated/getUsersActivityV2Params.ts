/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetUsersActivityV2TypesItem } from './getUsersActivityV2TypesItem';

export type GetUsersActivityV2Params = {
/**
 * Array of users addresses. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
users: string[];
/**
 * Amount of items returned in response.
 */
limit?: number;
/**
 * Use continuation token to request next offset of items.
 */
continuation?: number;
types?: GetUsersActivityV2TypesItem[];
};
