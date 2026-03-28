/**
 * React 19 removed UMD builds. gatsby-plugin-decap-cms expects them at:
 *   react/umd/react.production.min.js
 *   react-dom/umd/react-dom.production.min.js
 *
 * This script creates stub UMD files that re-export from the CJS builds.
 */
const fs = require("fs");
const path = require("path");

const stubs = [
  {
    dir: path.join(__dirname, "..", "node_modules", "react", "umd"),
    file: "react.production.min.js",
    content: `(function(g){if(typeof module==='object')module.exports=require('react');else{var r=require('react');Object.keys(r).forEach(function(k){g[k]=r[k]});g.React=r;}})(typeof globalThis!=='undefined'?globalThis:typeof self!=='undefined'?self:this);`,
  },
  {
    dir: path.join(__dirname, "..", "node_modules", "react-dom", "umd"),
    file: "react-dom.production.min.js",
    content: `(function(g){if(typeof module==='object')module.exports=require('react-dom');else{var r=require('react-dom');Object.keys(r).forEach(function(k){g[k]=r[k]});g.ReactDOM=r;}})(typeof globalThis!=='undefined'?globalThis:typeof self!=='undefined'?self:this);`,
  },
];

for (const stub of stubs) {
  fs.mkdirSync(stub.dir, { recursive: true });
  fs.writeFileSync(path.join(stub.dir, stub.file), stub.content);
  console.log(
    `Created ${path.relative(process.cwd(), path.join(stub.dir, stub.file))}`,
  );
}
