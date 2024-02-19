/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { PaymentTokens } from './paymentTokens';
import type { SupportedBidCurrencies } from './supportedBidCurrencies';

export interface String {
  collectionBidSupported?: boolean;
  customFeesSupported?: boolean;
  enabled?: boolean;
  maxPriceRaw?: string;
  minimumBidExpiry?: number;
  minimumPrecision?: string;
  minPriceRaw?: string;
  orderKind?: string;
  /** This indicates whether or not multi quantity bidding is supported */
  partialOrderSupported?: boolean;
  paymentTokens?: PaymentTokens;
  supportedBidCurrencies?: SupportedBidCurrencies;
  traitBidSupported?: boolean;
}