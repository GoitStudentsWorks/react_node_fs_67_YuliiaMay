import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  server: {
    open: "/react_node_fs_67_YuliiaMay",
    port: 8000,
  },
  base: "/react_node_fs_67_YuliiaMay",
});
