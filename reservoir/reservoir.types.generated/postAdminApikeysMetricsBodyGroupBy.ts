/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */

/**
 * 1 - All calls per hour/day/month<br>2 - All calls per key per hour/day/month<br>3 - All calls per key per route per hour/day/month<br>4 - All calls per key per route per status code per hour/day/month<br>
 */
export type PostAdminApikeysMetricsBodyGroupBy = typeof PostAdminApikeysMetricsBodyGroupBy[keyof typeof PostAdminApikeysMetricsBodyGroupBy];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAdminApikeysMetricsBodyGroupBy = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
} as const;
