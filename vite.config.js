import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // For development, use root path
  // For production, use GitHub Pages subdirectory path
  const base = command === 'serve' ? '/' : '/Portfolio.2.o/';
  
  return {
    plugins: [react()],
    base: base,
  };
});
