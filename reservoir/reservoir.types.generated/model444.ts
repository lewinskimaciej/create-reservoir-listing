/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Fees } from './fees';
import type { Model444Orderbook } from './model444Orderbook';
import type { Model444OrderKind } from './model444OrderKind';

export interface Model444 {
  /** Bid on a particular attribute key. Example: `Composition` */
  attributeKey?: string;
  /** Bid on a particular attribute value. Example: `Teddy (#33)` */
  attributeValue?: string;
  /** If true, royalties will be automatically included. */
  automatedRoyalties?: boolean;
  /** Bid on a particular collection with collection-id. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63` */
  collection?: string;
  currency?: string;
  /** If true flagged tokens will be excluded */
  excludeFlaggedTokens?: boolean;
  /** Unix timestamp (seconds) indicating when listing will expire. Example: `1656080318` */
  expirationTime?: string;
  fees?: Fees;
  /** Unix timestamp (seconds) indicating when listing will be listed. Example: `1656080318` */
  listingTime?: string;
  /** Optional. Set a custom nonce */
  nonce?: string;
  /** Orderbook where order is placed. Example: `Reservoir` */
  orderbook?: Model444Orderbook;
  /** Optional API key for the target orderbook */
  orderbookApiKey?: string;
  /** Exchange protocol used to create order. Example: `seaport-v1.5` */
  orderKind?: Model444OrderKind;
  /** Quantity of tokens user is buying. Only compatible with ERC1155 tokens. Example: `5` */
  quantity?: number;
  /** The royalty percentage to pay. Only relevant when using automated royalties. */
  royaltyBps?: number;
  /** Optional. Random string to make the order unique */
  salt?: string;
  /** Bid on a particular token. Example: `0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63:123` */
  token?: string;
  /** Bid on a particular token set. */
  tokenSetId?: string;
  /** Amount bidder is willing to offer in wei. Example: `1000000000000000000` */
  weiPrice: string;
}
