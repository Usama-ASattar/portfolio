// src/utils/text.ts
export function paragraphToArray(input: string): string[] {
  if (!input) return [];

  // if it contains line breaks, split on them
  if (/\r?\n/.test(input)) {
    return input
      .split(/\r?\n+/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }

  // fallback: split by sentence boundary (after a period)
  return input
    .split(/(?<=\.)\s+/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}
