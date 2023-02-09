import path from "path";

export default function (ctx) {
	const dev = ctx.env === "development";

	return {
		from: ctx.from,
		to: ctx.to,
		map: false,
		plugins: {
			"postcss-import": {
				resolve: (id, _, importOptions) => {
					return path.resolve(importOptions.root, id);
				},
			},
			"postcss-preset-env": {
				autoprefixer: dev ? false : true,
				stage: 2,
				features: {
					"nesting-rules": true,
					"custom-media-queries": true,
					"all-property": false,
					"any-link-pseudo-class": false,
					"custom-properties": false,
					"font-variant-property": false,
					"gap-properties": dev ? false : true,
					"image-set-function": false,
					"is-pseudo-class": false,
					"logical-properties-and-values": false,
					"not-pseudo-class": false,
					"overflow-property": false,
					"overflow-wrap-property": false,
					"unset-value": false,
				},
			},
		},
	};
}
