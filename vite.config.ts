import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ReactGsapEffects",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "gsap"
      ]
    }
  }
});