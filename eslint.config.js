import js from "@eslint/js";
import pluginVitest from "@vitest/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import configPrettier from "eslint-config-prettier/flat";
import pluginJestDom from "eslint-plugin-jest-dom";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginTestingLibrary from "eslint-plugin-testing-library";
import globals from "globals";

export default defineConfig([
  globalIgnores(["coverage", "dist"]),
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  pluginReactHooks.configs.flat["recommended-latest"],
  configPrettier,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "react/prop-types": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
  {
    files: ["**/*.test.{js,jsx}", "**/__tests__/**/*.{js,jsx}"],
    extends: [
      pluginJestDom.configs["flat/recommended"],
      pluginTestingLibrary.configs["flat/react"],
      pluginVitest.configs.recommended,
    ],
  },
]);
