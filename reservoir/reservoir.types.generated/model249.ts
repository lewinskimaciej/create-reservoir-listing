/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Model233 } from './model233';
import type { PaymentTokens } from './paymentTokens';
import type { Model234 } from './model234';
import type { SupportedBidCurrencies } from './supportedBidCurrencies';

export interface Model249 {
  collectionBidSupported?: boolean;
  customFeesSupported?: boolean;
  domain?: string;
  fee?: Model233;
  imageUrl?: string;
  listingEnabled?: boolean;
  minimumBidExpiry?: number;
  minimumPrecision?: string;
  name?: string;
  orderbook?: string;
  orderKind?: string;
  /** This indicates whether or not multi quantity bidding is supported */
  partialBidSupported?: boolean;
  paymentTokens?: PaymentTokens;
  royalties?: Model234;
  supportedBidCurrencies?: SupportedBidCurrencies;
  traitBidSupported?: boolean;
}
