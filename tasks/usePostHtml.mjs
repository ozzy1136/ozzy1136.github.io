import posthtml from "posthtml";
import inlineSVG from "posthtml-inline-svg";

import fs from "fs-extra";

export default async function (file) {
	return posthtml([
		inlineSVG({
			cwd: "static",
			tag: "svgslot",
			attr: "src",
		}),
	])
		.process(await fs.readFile(file, { encoding: "utf8" }))
		.then((result) => result.html);
}
