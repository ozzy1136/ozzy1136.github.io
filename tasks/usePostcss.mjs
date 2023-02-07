import postcss from "postcss";
import postcssrc from "postcss-load-config";

import fs from "fs-extra";

export default async function (oldFile, newFile) {
	const result = postcssrc({
		from: oldFile,
		to: newFile,
	}).then(async ({ plugins, options }) => {
		return postcss(plugins)
			.process(await fs.readFile(oldFile, { encoding: "utf8" }), options)
			.then((output) => output.css);
	});
	return result;
}
