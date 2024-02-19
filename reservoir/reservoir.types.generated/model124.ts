/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Volume } from './volume';
import type { Model19 } from './model19';
import type { Model28 } from './model28';

export interface Model124 {
  banner?: string;
  collectionVolume?: Volume;
  contract?: string;
  count?: number;
  countPercentChange?: number;
  creator?: string;
  description?: string;
  floorAsk?: Model19;
  /** Collection id */
  id?: string;
  image?: string;
  isSpam?: boolean;
  name?: string;
  onSaleCount?: number;
  /** Unique number of owners. */
  ownerCount?: number;
  primaryContract?: string;
  /** Total tokens within the collection. */
  tokenCount?: number;
  volume?: number;
  volumeChange?: Model28;
  volumePercentChange?: number;
}