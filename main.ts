// bring-the-humans-03 entrypoint.
//
// The entry hands in one TikTok video, and the video's address lives in
// VIDEO.json at the root of this repository. All this program does is
// put a copy of that file where the grader looks for it.
//
// The repository root comes from MAKEFUN_BOT_DIR (the working directory
// when it is not set), and the destination from MAKEFUN_OUTPUT_DIR
// ("/output" when it is not set).

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
