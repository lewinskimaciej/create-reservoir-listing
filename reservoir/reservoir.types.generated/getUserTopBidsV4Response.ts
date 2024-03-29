/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Model373 } from './model373';

export interface GetUserTopBidsV4Response {
  continuation?: string;
  topBids?: Model373;
  /** Amount of currency from all token bids; native currency unless `displayCurrency` passed */
  totalAmount?: number;
  /** Amount of token with bids. */
  totalTokensWithBids?: number;
}
