/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Model523 } from './model523';
import type { Model522 } from './model522';

export interface Model524 {
  /** If true, do not filter out inactive orders (only relevant for order id filtering). */
  allowInactiveOrderIds?: boolean;
  /** Exclude orders that can only be filled by EOAs, to support filling with smart contracts. */
  excludeEOA?: boolean;
  feesOnTop?: Model523;
  /** Optional. Set custom gas price. */
  maxFeePerGas?: string;
  /** Optional. Set custom gas price. */
  maxPriorityFeePerGas?: string;
  normalizeRoyalties?: boolean;
  /** If true, only the path will be returned. */
  onlyPath?: boolean;
  orderId?: string;
  /** Quantity of tokens user is selling. Only compatible when selling a single ERC1155 token. Example: `5` */
  quantity?: number;
  rawOrder?: Model522;
  /** Filling source used for attribution. Example: `reservoir.market` */
  source?: string;
  /** Address of wallet filling the order. Example: `0xF296178d553C8Ec21A2fBD2c5dDa8CA9ac905A00` */
  taker: string;
  /** Filter to a particular token. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:123` */
  token: string;
  /** Override the X2Y2 API key used for filling. */
  x2y2ApiKey?: string;
}
