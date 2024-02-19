/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { FeeBreakdown } from './feeBreakdown';
import type { Metadata } from './metadata';
import type { Model38Side } from './model38Side';

export interface Model38 {
  approvalStatus: string;
  createdAt: string;
  expiration: number;
  feeBps?: number;
  feeBreakdown?: FeeBreakdown;
  fillabilityStatus: string;
  id: string;
  kind: string;
  maker: string;
  price: number;
  rawData?: Metadata;
  side: Model38Side;
  source?: string;
  taker: string;
  tokenSetId: string;
  tokenSetSchemaHash: string;
  updatedAt: string;
  validFrom: number;
  validUntil: number;
  value: number;
}
