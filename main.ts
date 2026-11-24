// Make the AI Judge Laugh: Developer Excuses
// One funny single-line excuse a developer gives when code breaks in
// production. This program writes that line, exactly as written, to
// /output/entry.txt so the sealed scorer can read it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "I approved that pull request from my phone in a Chili's parking lot while my wife yelled at me to buy milk.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate requires 1 to 200 characters of non-whitespace text.
if (EXCUSE.length === 0 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`Excuse must be 1-200 characters, got ${EXCUSE.length}`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} characters to ${OUTPUT_PATH}`);
