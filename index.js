import * as esbuild from "npm:esbuild";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader";

// usage
// node index.js --entry=a,b,c --out=./dist/bundle.js
// node index.js --entry=https://bytepack.bytedance.net/sass --out=bundle.js

const entry = process.argv.find((arg) => arg.startsWith("--entry="))?.split("=")[1]?.split(",");
const outfile = process.argv.find((arg) => arg.startsWith("--out="))?.split("=")[1] || 'out.js';
if (!entry || !outfile) {
  console.error("Please provide an entry point with --entry=<url> and an output file with --out=<file>");
  process.exit(1);
}

await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: entry,
  outfile,
  bundle: true,
  format: "esm",
});

esbuild.stop();