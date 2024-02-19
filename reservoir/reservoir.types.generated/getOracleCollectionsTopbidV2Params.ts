/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { GetOracleCollectionsTopbidV2Kind } from './getOracleCollectionsTopbidV2Kind';
import type { GetOracleCollectionsTopbidV2Signer } from './getOracleCollectionsTopbidV2Signer';

export type GetOracleCollectionsTopbidV2Params = {
kind?: GetOracleCollectionsTopbidV2Kind;
currency?: string;
twapSeconds?: number;
collection?: string;
token?: string;
signer?: GetOracleCollectionsTopbidV2Signer;
};
