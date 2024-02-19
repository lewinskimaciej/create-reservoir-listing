/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { VolumeChange } from './volumeChange';
import type { Rank } from './rank';
import type { SampleImages } from './sampleImages';

export interface Model12 {
  banner?: string;
  description?: string;
  discordUrl?: string;
  externalUrl?: string;
  floorAskPrice?: number;
  floorSale?: VolumeChange;
  id?: string;
  image?: string;
  name?: string;
  primaryContract?: string;
  rank?: Rank;
  sampleImages?: SampleImages;
  slug?: string;
  tokenCount?: string;
  tokenSetId?: string;
  topBidMaker?: string;
  topBidValue?: number;
  twitterUsername?: string;
  volume?: Rank;
  volumeChange?: VolumeChange;
}