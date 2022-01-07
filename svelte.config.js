import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { optimizeImports } from "carbon-preprocess-svelte";
import { icons } from "carbon-preprocess-svelte";
import { pictograms } from "carbon-preprocess-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), optimizeImports(), icons(), pictograms()],

  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};

export default config;
