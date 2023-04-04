import solid from "solid-start/vite";
import staticAdapter from "solid-start-static";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/ppi-calculator-signals/",
  // insert your github project name between slashes above
  plugins: [solid({ adapter: staticAdapter() })],
});
