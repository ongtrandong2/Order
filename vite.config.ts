import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import zaloMiniApp from "zmp-vite-plugin";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    plugins: [reactRefresh(), zaloMiniApp()],
  });
};
