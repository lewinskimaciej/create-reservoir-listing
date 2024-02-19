/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Model236Exchanges } from './model236Exchanges';
import type { Model233 } from './model233';
import type { Model234 } from './model234';

export interface Model236 {
  domain?: string;
  exchanges?: Model236Exchanges;
  fee?: Model233;
  imageUrl?: string;
  name?: string;
  orderbook?: string;
  royalties?: Model234;
}