import globLib from "glob";
import { minify } from "terser";

import fs from "fs-extra";
import { dirname } from "path";

const { glob } = globLib;

const PRODUCTION_DIRECTORY = "dist";

glob("src/**/*{.js,.mjs}", (error, files) => {
	if (error) console.error(error);

	files.forEach(async (file) => {
		// glob works with forward slashes in paths
		const newFile = file.replace(/^[\w]+(?=\/)/, `${PRODUCTION_DIRECTORY}`);

		await fs.ensureDir(dirname(newFile));

		const result = await minify(
			await fs.readFile(file, { encoding: "utf8" })
		);
		fs.writeFileSync(newFile, result.code);
	});
});
