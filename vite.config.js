// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
	root: resolve(process.cwd(), "pages"),
	publicDir: resolve(process.cwd(), "public"),
	resolve: {
		alias: [
			{
				find: "@assets",
				replacement: resolve(process.cwd(), "assets/"),
			},
			{
				find: "@components",
				replacement: resolve(process.cwd(), "components/"),
			},
			{
				find: "@layouts",
				replacement: resolve(process.cwd(), "layouts/"),
			},
		],
	},
	json: {
		stringify: true,
	},
	appType: "mpa",
	build: {
		outDir: "../dist",
	},
}));
