import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = join(OUTPUT_DIR, OUTPUT_FILE);

const LIE_SUBJECT = "The backup ";
const LIE_VERB = "exists.";
const ENTRY = [LIE_SUBJECT, LIE_VERB].join("");

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
