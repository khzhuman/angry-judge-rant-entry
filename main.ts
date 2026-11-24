import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry = "'Just circling back' is not a follow-up, it is a threat dressed as a calendar invite, and the person who sends it at 4:59 PM on a Friday has never once circled back to anything except my will to live.";
const outputPath = process.env.ENTRY_OUT ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, entry, "utf8");
