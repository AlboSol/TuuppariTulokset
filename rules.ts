/**
 * Rules placeholder.
 * Net stroke play per-hole: net = gross - allocatedStrokes.
 */
export function netScore(gross: number, allocatedStrokes: number): number {
  return gross - allocatedStrokes;
}
