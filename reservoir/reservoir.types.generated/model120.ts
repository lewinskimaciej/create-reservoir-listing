/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { RecentSales } from './recentSales';

export interface Model120 {
  count?: number;
  countPercentChange?: number;
  /** Collection id */
  id?: string;
  image?: string;
  name?: string;
  primaryContract?: string;
  recentSales?: RecentSales;
  volume?: number;
  volumePercentChange?: number;
}
