/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { SampleImages } from './sampleImages';
import type { Metadata } from './metadata';

export interface GetApiKeyRateLimitsResponse {
  active?: boolean;
  appName?: string;
  createdAt?: string;
  email?: string;
  ips?: SampleImages;
  key?: string;
  origins?: SampleImages;
  permissions?: Metadata;
  revShareBps?: number;
  tier?: number;
  website?: string;
}
