/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Metadata } from './metadata';
import type { FloorAskPrices } from './floorAskPrices';
import type { Model506Status } from './model506Status';

export interface Model506 {
  data?: Metadata;
  orderIndexes?: FloorAskPrices;
  /** Returns `complete` or `incomplete`. */
  status: Model506Status;
  tip?: string;
}
