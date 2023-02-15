import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const env = process.env.NODE_ENV;
export const basePath = env === "production" ? "/dpltst/" : "./";

// https://vitejs.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [react()],
});
