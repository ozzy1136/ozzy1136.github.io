import posthtml from "posthtml";
import inlineSVG from "posthtml-inline-svg";
import include from "posthtml-include";

import fs from "fs-extra";

export default async function (file) {
	return posthtml([
		include({
			root: "src",
			encoding: "utf8",
		}),
		inlineSVG({
			cwd: "static",
			tag: "svgslot",
			attr: "src",
		}),
	])
		.process(await fs.readFile(file, { encoding: "utf8" }))
		.then((result) => result.html);
}
