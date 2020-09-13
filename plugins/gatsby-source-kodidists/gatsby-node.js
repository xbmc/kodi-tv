// format for console log when inspecting json
// console.log(inspect(authors, { colors: true, depth: Infinity }));

const fetch = require("node-fetch")
const yaml = require("js-yaml")
const slugify = require("slugify")
const fs = require("fs")
const inspect = require("util").inspect // this is only here to inspect the json during debugging

const DIST_NODE_TYPE = "Distribution"
const YAML_PATH = "src/data/distributions.yaml"
const IMAGE_PATH = "/images/distributions/"
const IMAGE_TYPE = ".png"

let dists = []

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode, touchNode, deleteNode } = actions
  let data = []
  try {
    data = yaml.safeLoadAll(fs.readFileSync(YAML_PATH, "utf8"))
  } catch (e) {
    console.log("unable to load distributions")
    console.log(e)
  }
  data.forEach(finishSetup)
  dists.forEach(dist =>
    createNode({
      ...dist,
      id: createNodeId(`${DIST_NODE_TYPE}-${dist.name}`), // hashes the inputs into an ID
      parent: null,
      children: [],
      internal: {
        type: DIST_NODE_TYPE,
        content: JSON.stringify(dist),
        contentDigest: createContentDigest(dist),
      },
    })
  )
  return
}

function finishSetup(dist) {
  dist.slug = slugify(dist.name, { lower: true })
  dist.icon = IMAGE_PATH + dist.slug + IMAGE_TYPE
  dists.push(dist)
}
