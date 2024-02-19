/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetOrdersBidsV1Status } from './getOrdersBidsV1Status';
import type { GetOrdersBidsV1SortBy } from './getOrdersBidsV1SortBy';

export type GetOrdersBidsV1Params = {
/**
 * Filter to a token, e.g. `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:123`
 */
token?: string;
/**
 * Filter to a particular set, e.g. `contract:0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63`
 */
tokenSetId?: string;
/**
 * Filter to a particular user, e.g. `0x4d04eb67a2d1e01c71fad0366e0c200207a75487`
 */
maker?: string;
/**
 * `active` = currently valid, `inactive` = temporarily invalid, `expired` = permanently invalid

Available when filtering by maker, otherwise only valid orders will be returned
 */
status?: GetOrdersBidsV1Status;
sortBy?: GetOrdersBidsV1SortBy;
continuation?: string;
limit?: number;
};
