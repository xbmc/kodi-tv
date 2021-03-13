/// @ts-check

// format for console log when inspecting json
// console.log(inspect(authors, { colors: true, depth: Infinity }));
// const inspect = require("util").inspect // this is only here to inspect the json during debugging

const fs = require("fs");
const yaml = require("js-yaml");

let kodiversion = "";
let kodiversions = "";
/** @type {import("../../src/addon").IAddon[]} */
let addons = [];
let featured = { addons: [] };
/** @type {any[]} */
let authors = [];
/** @type {any[]} */
let categories = [];
let pixiememory = "";
let addonsfeatured = "";
let addonnodetype = "";
let authornodetype = "";
let categorynodetype = "";

exports.onPreBootstrap =
  /**
   * @param {any} _ref
   * @param {{ kodiversion: string }} pluginOptions
   */
  function (_ref, pluginOptions) {
    kodiversions = pluginOptions.kodiversions;
  };

function setFeatured(addon) {
  if (featured.addons.find(o => o.addonid === addon.id) !== undefined) {
    addon.featured = "true";
  } else {
    addon.featured = "";
  }
  return addon;
}

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode, touchNode, deleteNode } = actions;
  for (let i = 0; i < kodiversions.length; i++) {
    kodiversion = kodiversions[i];
    console.log("loading addon information for " + kodiversion);
    pixiememory = "src/data/addons/" + kodiversion + "/";
    addonnodetype = kodiversion + "Addon";
    authornodetype = kodiversion + "Author";
    categorynodetype = kodiversion + "Category";
    addons = JSON.parse(fs.readFileSync(pixiememory + "addons.json", "utf8"));
    authors = JSON.parse(fs.readFileSync(pixiememory + "authors.json", "utf8"));
    categories = JSON.parse(
      fs.readFileSync(pixiememory + "categories.json", "utf8")
    );
    featured = yaml.load(fs.readFileSync(pixiememory + "featured.yaml", "utf8"));
    addons.forEach(addon =>
      createNode({
        ...setFeatured(addon),
        id: createNodeId(`${addonnodetype}-${addon.id}`), // hashes the inputs into an ID
        parent: null,
        children: [],
        internal: {
          type: addonnodetype,
          content: JSON.stringify(addon),
          contentDigest: createContentDigest(addon),
        },
      })
    );
    authors.forEach(author =>
      createNode({
        ...author,
        id: createNodeId(`${authornodetype}-${author.id}`), // hashes the inputs into an ID
        parent: null,
        children: [],
        internal: {
          type: authornodetype,
          content: JSON.stringify(author),
          contentDigest: createContentDigest(author),
        },
      })
    );
    categories.forEach(category =>
      createNode({
        ...category,
        id: createNodeId(`${categorynodetype}-${category.id}`), // hashes the inputs into an ID
        parent: null,
        children: [],
        internal: {
          type: categorynodetype,
          content: JSON.stringify(category),
          contentDigest: createContentDigest(category),
        },
      })
    );
  }
};
