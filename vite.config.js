// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        kategori: resolve(__dirname, "src/kategori.html"),
        shop: resolve(__dirname, "src/shop.html"),
        produkt: resolve(__dirname, "src/produkt.html"),
        om: resolve(__dirname, "src/om.html"),
      },
    },
  },
});
