import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:4002",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist", // Ensure the output directory is explicitly set
  },
});
