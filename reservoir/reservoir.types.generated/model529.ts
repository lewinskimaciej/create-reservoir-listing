/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Model528 } from './model528';
import type { Model527 } from './model527';

export interface Model529 {
  /** If true, inactive orders will not be skipped over (only relevant when filling via a specific order id). */
  allowInactiveOrderIds?: boolean;
  /** Optional Blur auth used for filling */
  blurAuth?: string;
  /** Exclude orders that can only be filled by EOAs, to support filling with smart contracts. */
  excludeEOA?: boolean;
  feesOnTop?: Model528;
  /** If true, filling will be forced to use the common 'approval + transfer' method instead of the approval-less 'on-received hook' method */
  forceRouter?: boolean;
  items: Model527;
  /** Optional custom gas settings. Includes base fee & priority fee in this limit. */
  maxFeePerGas?: string;
  /** Optional custom gas settings. */
  maxPriorityFeePerGas?: string;
  /** Charge any missing royalties. */
  normalizeRoyalties?: boolean;
  /** If true, only the filling path will be returned. */
  onlyPath?: boolean;
  /** Optional OpenSea API key used for filling. You don't need to pass your own key, but if you don't, you are more likely to be rate-limited. */
  openseaApiKey?: string;
  /** If true, any off-chain or on-chain errors will be skipped. */
  partial?: boolean;
  /** Filling source used for attribution. */
  source?: string;
  /** Address of wallet filling. */
  taker: string;
  /** Optional X2Y2 API key used for filling. */
  x2y2ApiKey?: string;
}