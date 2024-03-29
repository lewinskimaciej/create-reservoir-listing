/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Model337 } from './model337';
import type { Model334 } from './model334';
import type { Model53 } from './model53';
import type { Metadata } from './metadata';
import type { Model335 } from './model335';

export interface Model338 {
  attributes?: Model337;
  chainId: number;
  collection?: Model334;
  contract?: string;
  description?: string;
  image?: string;
  imageLarge?: string;
  imageSmall?: string;
  isFlagged?: boolean;
  isSpam?: boolean;
  /** Can be erc721, erc115, etc. */
  kind?: string;
  /** The value of the last sale.Can be null. */
  lastAppraisalValue?: number;
  lastFlagChange?: string;
  lastFlagUpdate?: string;
  lastSale?: Model53;
  media?: string;
  metadata?: Metadata;
  metadataDisabled?: boolean;
  name?: string;
  /** No rarity rank for collections over 100k */
  rarityRank?: number;
  /** No rarity for collections over 100k */
  rarityScore?: number;
  remainingSupply?: number;
  /** Can be higher than one if erc1155. */
  supply?: number;
  tokenId?: string;
  topBid?: Model335;
}
