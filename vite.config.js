import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // For development, use root path
  // For production, use relative path to work with both GitHub Pages and custom domain
  const base = command === 'serve' ? '/' : './';
  
  return {
    plugins: [react()],
    base: base,
  };
});
