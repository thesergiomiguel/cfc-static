/**
 * @type {import('vite').UserConfig}
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import banner from "vite-plugin-banner";
import path from "path";

const cssBanner = banner((filename) => {
  return (
    filename.match(/\.css$/) &&
    `/*
Theme Name: Laulo CFC Child
Description: Child theme for Laulo CFC
Author: Sérgio Miguel
Template: laulo-cfc
Version: 1.0
*/`
  );
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), cssBanner],
  resolve: {
    alias: {
      css: path.resolve(__dirname, "./src/assets/scss/"),
      img: path.resolve(__dirname, "./src/assets/images"),
    },
  },
});
