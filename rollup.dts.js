import * as path from "path";
import { default as dts } from "rollup-plugin-dts";
import { defineConfig } from "rollup";

const join = (filePath: string) => path.join(__dirname, filePath)

export default defineConfig({
  input: join("dist_types/index.d.ts"),
  external: ["react"],
  plugins: [dts()],
  output: {
    file: join("dist/index.d.ts"),
    format: "es"
  }
})

