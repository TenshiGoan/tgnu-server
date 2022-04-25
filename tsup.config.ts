import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  dts: true,
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: true,
  bundle: false,
  clean: true,
  keepNames: true,
});
