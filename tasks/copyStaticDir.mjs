import fs from "fs-extra";

const CLI_ARGS = process.argv.slice(2);
// Expect single argument in form of --new-dir=directory
const DEST_DIRECTORY = CLI_ARGS[0].match(/(?<=\=)[\w]+$/)[0];

await fs.ensureDir(DEST_DIRECTORY);
await fs.copy("static", DEST_DIRECTORY);
