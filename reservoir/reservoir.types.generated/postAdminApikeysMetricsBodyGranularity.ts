/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * beam-reservoir API
 * You are viewing the reference docs for the beam-reservoir API.        For a more complete overview with guides and examples, check out the <a href='https://reservoirprotocol.github.io'>Reservoir Protocol Docs</a>.
 * OpenAPI spec version: 5.296.1
 */

/**
 * Return results by either hourly/daily/monthly granularity.<br>Hourly will return time in format YYYY-MM-DDTHH:00:000Z<br>Daily will return time in format YYYY-MM-DDT00:00:000Z<br>Monthly will return time in format YYYY-MM-01T00:00:000Z<br>
 */
export type PostAdminApikeysMetricsBodyGranularity = typeof PostAdminApikeysMetricsBodyGranularity[keyof typeof PostAdminApikeysMetricsBodyGranularity];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PostAdminApikeysMetricsBodyGranularity = {
  hourly: 'hourly',
  daily: 'daily',
  monthly: 'monthly',
} as const;
