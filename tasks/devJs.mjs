import fs from "fs-extra";
import path from "path";

const DEV_DIRECTORY = "dev";
const CLI_ARGS = process.argv.slice(2);

const rootDirRegex = new RegExp(`^[\\w]+(?=${"\\" + path.sep})`);
const file = CLI_ARGS[0];
const newFile = file.replace(rootDirRegex, `${DEV_DIRECTORY}`);

fs.copySync(file, newFile);
