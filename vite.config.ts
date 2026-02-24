import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: 'public',
  server: {
    allowedHosts: true,
  },
  build: {
    outDir: '../dist',
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/react-app/main.tsx'),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
