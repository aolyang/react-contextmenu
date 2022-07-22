const path = require("path")
const { default: dts } = require("rollup-plugin-dts")
const { rollup } = require("rollup")

const join = (filepath) => path.join(__dirname, filepath);

(async () => {
  const bundle = await rollup({
    input: join(`dist_types/index.d.ts`),
    external: ["react"],
    plugins: [dts()]
  })
  await bundle.write({
    file: join(`dist/index.d.ts`), format: "es"
  })
  await bundle.close()
})()
