import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Add polyfills for Node.js globals
      'stream': 'stream-browserify',
      'crypto': 'crypto-browserify',
      'buffer': 'buffer',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Polyfill for global and Buffer
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
});
