const path = require("path");
const withExportImages = require("next-export-optimize-images");

const configOptions = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config) => {
		config.module.rules = [
			...config.module.rules,
			{
				test: /\.svg$/,
				issuer: /\.[jt]sx?$/,
				use: ["@svgr/webpack"],
			},
		];

		config.resolve.alias = {
			...config.resolve.alias,
			"@assets": path.resolve(__dirname, "assets/"),
			"@components": path.resolve(__dirname, "components/"),
			"@layouts": path.resolve(__dirname, "layouts/"),
		};

		return config;
	},
};

module.exports =
	process.env.NODE_ENV === "production"
		? withExportImages(configOptions)
		: configOptions;
