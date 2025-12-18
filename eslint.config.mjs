import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "no-var": "error",
      "no-unused-vars": "warn",
      "no-empty": "error",
      "no-empty-function": "warn",
      "dot-notation": "error",
      "semi-style": "warn",
      // React specific
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
]);

export default eslintConfig;
