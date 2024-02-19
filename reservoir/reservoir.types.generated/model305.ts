/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Model303 } from './model303';
import type { FloorSale } from './floorSale';
import type { Model21 } from './model21';
import type { SampleImages } from './sampleImages';
import type { Model304 } from './model304';
import type { Volume } from './volume';
import type { Model28 } from './model28';

export interface Model305 {
  banner?: string;
  /** Returns `erc721`, `erc1155`, etc. */
  contractKind?: string;
  description?: string;
  discordUrl?: string;
  externalUrl?: string;
  floorAskPrice?: Model303;
  floorSale?: FloorSale;
  /** Collection Id */
  id?: string;
  image?: string;
  isSpam?: boolean;
  metadataDisabled?: boolean;
  name?: string;
  openseaVerificationStatus?: string;
  primaryContract?: string;
  rank?: Model21;
  sampleImages?: SampleImages;
  slug?: string;
  /** Total token count */
  tokenCount?: string;
  tokenSetId?: string;
  topBidMaker?: string;
  topBidSourceDomain?: string;
  topBidValue?: Model304;
  twitterUrl?: string;
  twitterUsername?: string;
  volume?: Volume;
  volumeChange?: Model28;
}
