// format for console log when inspecting json
// console.log(inspect(authors, { colors: true, depth: Infinity }));

const fetch = require("node-fetch")
const yaml = require("js-yaml")
const fs = require("fs")
const inspect = require("util").inspect // this is only here to inspect the json during debugging

const STORE_NODE_TYPE = "Store"
const YAML_PATH = "src/data/store.yaml"


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
    console.log("unable to load store")
    console.log(e)
  }
  data.forEach(item =>
    createNode({
      ...item,
      id: createNodeId(`${STORE_NODE_TYPE}-${item.sku}`), // hashes the inputs into an ID
      parent: null,
      children: [],
      internal: {
        type: STORE_NODE_TYPE,
        content: JSON.stringify(item),
        contentDigest: createContentDigest(item),
      },
    })
  )
  return
}

function finishSetup(item) {
  item.icon = IMAGE_PATH + item.icon
  store.push(item)
}
