import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	dts: true,
	clean: true,
	format: ["esm"],
	target: "node20",
	minify: false,
});
