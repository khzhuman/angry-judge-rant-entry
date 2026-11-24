import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry = "'Just circling back' is not a follow-up, it is a threat dressed as a calendar invite, and the person who sends it at 4:59 PM on a Friday has never once circled back to anything except my will to live.";
const outputPath = process.env.ENTRY_OUT ?? "/output/entry.txt";

// Save the contest entry as exact UTF-8 text, creating its directory as needed.
function writeEntry(path: string, text: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeEntry(outputPath, entry);
