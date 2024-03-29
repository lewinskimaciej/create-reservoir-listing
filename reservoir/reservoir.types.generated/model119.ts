/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Model118 } from './model118';
import type { Price } from './price';

export interface Model119 {
  collection?: Model118;
  contract?: string;
  price?: Price;
  timestamp?: number;
  toAddress?: string;
  token?: Model118;
  type?: string;
}
