import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Указываем базовый путь для GitHub Pages
});

// export default defineConfig({
//   plugins: [react()],
//   base: "./", // Используем относительный путь
// });
