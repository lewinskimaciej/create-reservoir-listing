/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { DynamicPricing } from './dynamicPricing';
import type { Price } from './price';
import type { Source } from './source';

export interface Model72 {
  dynamicPricing?: DynamicPricing;
  id?: string;
  maker?: string;
  price?: Price;
  quantityFilled?: number;
  quantityRemaining?: number;
  source?: Source;
  validFrom?: number;
  validUntil?: number;
}
