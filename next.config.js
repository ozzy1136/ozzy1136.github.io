let path = require("path");

module.exports = {
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
			"@components": path.resolve(__dirname, "components/"),
		};

		return config;
	},
};
