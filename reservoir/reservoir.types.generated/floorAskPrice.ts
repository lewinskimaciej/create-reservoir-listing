/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Amount } from './amount';
import type { Currency } from './currency';
import type { NetAmount } from './netAmount';

/**
 * Can return `null` if there is no Floor Ask
 */
export interface FloorAskPrice {
  amount?: Amount;
  currency?: Currency;
  netAmount?: NetAmount;
}
