/**
 * React 19 removed UMD builds. gatsby-plugin-decap-cms expects them at:
 *   react/umd/react.production.min.js
 *   react-dom/umd/react-dom.production.min.js
 *
 * This script uses esbuild to create browser-compatible IIFE bundles
 * that expose window.React and window.ReactDOM globals.
 */
const { buildSync, build } = require("esbuild");
const fs = require("fs");
const path = require("path");

const nodeModules = path.join(__dirname, "..", "node_modules");

// Plugin that replaces `require("react")` with `window.React` in the react-dom bundle
const reactGlobalPlugin = {
  name: "react-global",
  setup(build) {
    build.onResolve({ filter: /^react$/ }, () => ({
      path: "react",
      namespace: "react-global",
    }));
    build.onLoad({ filter: /.*/, namespace: "react-global" }, () => ({
      contents: "module.exports = window.React;",
    }));
  },
};

const bundles = [
  {
    globalName: "React",
    stdinContents: `module.exports = require("react");`,
    outDir: path.join(nodeModules, "react", "umd"),
    outFile: "react.production.min.js",
  },
  {
    globalName: "ReactDOM",
    stdinContents: `module.exports = require("react-dom");`,
    outDir: path.join(nodeModules, "react-dom", "umd"),
    outFile: "react-dom.production.min.js",
    plugins: [reactGlobalPlugin],
  },
];

async function main() {
  for (const bundle of bundles) {
    fs.mkdirSync(bundle.outDir, { recursive: true });

    const outPath = path.join(bundle.outDir, bundle.outFile);
    const buildFn = bundle.plugins ? build : buildSync;
    const result = await buildFn({
      stdin: {
        contents: bundle.stdinContents,
        resolveDir: nodeModules,
      },
      bundle: true,
      format: "iife",
      globalName: bundle.globalName,
      minify: true,
      outfile: outPath,
      platform: "browser",
      plugins: bundle.plugins || [],
      footer: {
        js: `window.${bundle.globalName}=${bundle.globalName};`,
      },
    });

    if (result.errors && result.errors.length > 0) {
      console.error(`Failed to build ${bundle.outFile}:`, result.errors);
      process.exit(1);
    }

    console.log(
      `Created ${path.relative(process.cwd(), path.join(bundle.outDir, bundle.outFile))}`,
    );
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
