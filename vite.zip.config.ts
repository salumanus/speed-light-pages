// Build for sending the site as a ZIP: relative paths + classic (non-module) scripts,
// so index.html works when opened straight from disk (file://). Not used by Netlify.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    legacy({
      targets: ["defaults"],
      renderModernChunks: false,
    }),
    {
      // "crossorigin" on <script> makes browsers refuse file:// scripts, so drop it here
      name: "strip-crossorigin",
      enforce: "post",
      transformIndexHtml(html: string) {
        return html.replace(/ crossorigin/g, "");
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    outDir: "dist-zip",
    emptyOutDir: true,
  },
});
