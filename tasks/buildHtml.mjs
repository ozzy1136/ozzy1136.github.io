import htmlMinifierLib from "html-minifier-terser";
import globLib from "glob";

import fs from "fs-extra";
import { dirname } from "path";

import usePostHtml from "./usePostHtml.mjs";

const { minify } = htmlMinifierLib;
const { glob } = globLib;

const PRODUCTION_DIRECTORY = "dist";

glob("src/**/*.html", { ignore: "src/components/*" }, (error, files) => {
	if (error) console.error(error);

	files.forEach(async (file) => {
		// glob works with forward slashes in paths
		const newFile = file.replace(/^[\w]+(?=\/)/, `${PRODUCTION_DIRECTORY}`);

		await fs.ensureDir(dirname(newFile));

		const html = await usePostHtml(file);
		const minifiedHtml = await minify(html, {
			caseSensitive: true,
			collapseBooleanAttributes: true,
			collapseWhitespace: true,
			decodeEntities: true,
			html5: true,
			includeAutoGeneratedTags: true,
			keepClosingSlash: true,
			noNewlinesBeforeTagClose: true,
			removeAttributeQuotes: true,
			removeComments: true,
			removeRedundantAttributes: true,
		});
		fs.writeFileSync(newFile, minifiedHtml);
	});
});
