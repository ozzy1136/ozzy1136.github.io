import fs from "fs-extra";
import { dirname, sep } from "path";

import usePostcss from "./usePostcss.mjs";

const DEV_DIRECTORY = "dev";
const CLI_ARGS = process.argv.slice(2);

const rootDirRegex = new RegExp(`^[\\w]+(?=${"\\" + sep})`);
const file = CLI_ARGS[0];
const newFile = file.replace(rootDirRegex, `${DEV_DIRECTORY}`);

await fs.ensureDir(dirname(newFile));

const css = await usePostcss(file, newFile);
fs.writeFileSync(newFile, css);
