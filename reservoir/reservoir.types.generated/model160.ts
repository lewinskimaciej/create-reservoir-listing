/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Model159 } from './model159';
import type { Model157 } from './model157';
import type { Metadata } from './metadata';
import type { Model160Side } from './model160Side';
import type { Source } from './source';

export interface Model160 {
  contract?: string;
  createdAt: string;
  expiration: number;
  feeBps?: number;
  feeBreakdown?: Model159;
  id: string;
  kind: string;
  maker: string;
  metadata?: Model157;
  price: number;
  rawData?: Metadata;
  side: Model160Side;
  source?: Source;
  status?: string;
  taker: string;
  tokenSetId: string;
  tokenSetSchemaHash: string;
  updatedAt: string;
  validFrom: number;
  validUntil: number;
  value: number;
}
