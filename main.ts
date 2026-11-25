// The Excuse That Almost Works — writes the single one-line excuse to /output/entry.txt.
// Gate: UTF-8 text, 1-140 chars, one line, at most 20 words. The line below is
// 100 chars / 18 words: a boiler burst at 6am, ankle-deep water, plumber not till 2.
// Boring, specific, home-bound — the kind of text a tired manager almost believes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Boss, my boiler burst at 6am, the flat's ankle-deep and the emergency plumber can't get here till 2.";

const words = LINE.split(/\s+/).length;
if (LINE.length > 140 || words > 20) {
  throw new Error(`entry fails gate: ${LINE.length} chars, ${words} words`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} chars, ${words} words)`);
