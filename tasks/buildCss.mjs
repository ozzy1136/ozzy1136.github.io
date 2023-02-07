import CleanCSS from "clean-css";
import globLib from "glob";

import fs from "fs-extra";
import path from "path";

import usePostcss from "./usePostcss.mjs";

const { glob } = globLib;

const PRODUCTION_DIRECTORY = "dist";

glob("src/**/*.css", (error, files) => {
	if (error) console.error(error);

	files.forEach(async (file) => {
		// glob works with forward slashes in paths
		const newFile = file.replace(/^[\w]+(?=\/)/, `${PRODUCTION_DIRECTORY}`);

		await fs.ensureDir(path.dirname(newFile));

		const css = await usePostcss(file, newFile);
		const minifiedCss = new CleanCSS().minify(css).styles;
		fs.writeFileSync(newFile, minifiedCss);
	});
});
