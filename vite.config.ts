import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "UIComponentsReactAdapter",
      fileName: "ui-components-react-adapter",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "@skymfe/ui-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@skymfe/ui-components": "UIComponents",
        },
      },
    },
  },
});
