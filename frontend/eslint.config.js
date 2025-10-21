// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist", "build", "node_modules"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        console: "readonly",
        URL: "readonly",
        Blob: "readonly",
        ResizeObserver: "readonly",
        Intl: "readonly",
        alert: "readonly",
        confirm: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        Event: "readonly",
      },
    },

    plugins: {
      react,
      "react-hooks": hooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      "unused-imports": unusedImports,
      "react-refresh": reactRefresh,
      prettier,
    },

    rules: {
      // Format
      "prettier/prettier": "warn",

      // React
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // Hooks + Fast Refresh
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // Import order
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          groups: [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
        },
      ],

      // ---- Unused imports/vars (plugin handles imports; core rule off) ----
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error", // enables auto-remove on --fix
      "unused-imports/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^React$|^_",
          ignoreRestSiblings: true,
        },
      ],

      "no-empty": ["error", { allowEmptyCatch: true }],
    },

    settings: { react: { version: "detect" } },
  },

  // Tooling / scripts
  {
    files: ["scripts/**/*.js", "eslint.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        __dirname: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
    rules: {
      "no-undef": "off",
      "prettier/prettier": "warn",
      "no-empty": ["error", { allowEmptyCatch: true }],
      "import/order": "off",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",
    },
  },
];
