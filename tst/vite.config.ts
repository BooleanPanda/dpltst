import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const env = process.env.NODE_ENV;

// https://vitejs.dev/config/
export default defineConfig({
  base: env === "production" ? "/dpltst/" : "./",
  plugins: [react()],
});
