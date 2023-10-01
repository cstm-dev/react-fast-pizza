import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      features: "/src/Features",
      utils: "/src/Utils",
      hooks: "/src/Hooks",
      contexts: "/src/Contexts",
      helpers: "/src/Helpers",
      services: "/src/Services",
    },
  },
});
