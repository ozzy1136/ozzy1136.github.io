const dev = process.env.NODE_ENV === "development";

export default {
	plugins: {
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
