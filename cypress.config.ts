import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    viewportWidth: 1440,
    viewportHeight: 900
  }
});