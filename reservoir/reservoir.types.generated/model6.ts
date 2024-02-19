/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Model5 } from './model5';
import type { FloorAsk } from './floorAsk';
import type { VolumeChange } from './volumeChange';
import type { LastBuy } from './lastBuy';
import type { Metadata } from './metadata';
import type { Rank } from './rank';
import type { Royalties } from './royalties';
import type { SampleImages } from './sampleImages';
import type { TopBid } from './topBid';

export interface Model6 {
  attributes?: Model5;
  collectionBidSupported?: boolean;
  floorAsk?: FloorAsk;
  floorSale?: VolumeChange;
  floorSaleChange?: VolumeChange;
  id?: string;
  lastBuy?: LastBuy;
  metadata?: Metadata;
  name?: string;
  onSaleCount?: string;
  ownerCount?: number;
  primaryContract?: string;
  rank?: Rank;
  royalties?: Royalties;
  sampleImages?: SampleImages;
  /** Open Sea slug */
  slug?: string;
  tokenCount?: string;
  tokenSetId?: string;
  topBid?: TopBid;
  volume?: Rank;
  volumeChange?: VolumeChange;
}
