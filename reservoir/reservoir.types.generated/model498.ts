/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */
import type { Model497 } from './model497';
import type { Model498OrderKind } from './model498OrderKind';

export interface Model498 {
  orderIds: Model497;
  /** Exchange protocol used to bulk cancel order. Example: `seaport-v1.5` */
  orderKind: Model498OrderKind;
}
