import fs from "fs-extra";

const CLI_ARGS = process.argv.slice(2);
const DEST_DIRECTORY = CLI_ARGS[0].match(/(?<=\=)[\w]+$/)[0];

await fs.ensureDir(DEST_DIRECTORY);
await fs.copy("public", DEST_DIRECTORY);
