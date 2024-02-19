/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { FloorAskPrices } from './floorAskPrices';
import type { LastBuys } from './lastBuys';
import type { SampleImages } from './sampleImages';
import type { TopBid } from './topBid';

export interface Model246 {
  floorAskPrices?: FloorAskPrices;
  key: string;
  lastBuys?: LastBuys;
  lastSells?: LastBuys;
  sampleImages?: SampleImages;
  tokenCount: number;
  topBid?: TopBid;
  value: string;
}
