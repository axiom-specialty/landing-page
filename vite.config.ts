import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// base is the GitHub Pages project subpath (axiom-specialty.github.io/landing-page/).
// When the site moves to the custom domain (axiomspecialty.com) at the root, set
// base back to "/" and restore public/CNAME.
export default defineConfig(({ mode }) => ({
  base: "/landing-page/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'docs',
  },
}));
