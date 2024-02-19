/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Ips } from './ips';
import type { Origins } from './origins';
import type { Permissions } from './permissions';

export interface Model411 {
  active?: boolean;
  /** The api key to update */
  apiKey?: string;
  ips?: Ips;
  origins?: Origins;
  permissions?: Permissions;
  revShareBps?: number;
  tier?: number;
}
