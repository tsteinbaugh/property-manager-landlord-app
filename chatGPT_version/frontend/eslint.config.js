// eslint.config.js (flat config for newsrc only)
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    files: ["newsrc/**/*.{js,jsx}"],
    ignores: ["legacy-src/**", "node_modules/**", "dist/**", "e2e/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true }, // 👈 enable JSX parsing
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        // Vitest globals for tests in newsrc/
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "jsx-a11y": jsxA11y,
    },
    // Pull in the "recommended" rule sets by spreading their rules
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // project preferences
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "import/no-unresolved": "off",
      "no-unused-vars": ["warn"],
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
