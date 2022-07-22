import { defineConfig } from 'vite'
import * as path from "path"
import react from '@vitejs/plugin-react'

export const join = (filePath: string) => path.join(__dirname, filePath)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    lib: {
      entry: join("lib/index.ts"),
      formats: ["es"],
      fileName: () => "index.js"
    },
    rollupOptions: {
      output: {
        dir: "dist",
      },
      external: [
        "react"
      ]

    }
  }
})
