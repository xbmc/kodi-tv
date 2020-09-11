// format for console log when inspecting json
// console.log(inspect(authors, { colors: true, depth: Infinity }));

const fetch = require('node-fetch')
const yaml = require('js-yaml')
const slugify = require('slugify')
const fs = require('fs')
const inspect = require('util').inspect // this is only here to inspect the json during debugging

const DIST_NODE_TYPE = 'Distribution'

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
    getNodesByType,
}) => {
    const { createNode, touchNode, deleteNode } = actions
    var data = []
    try {
        data = yaml.safeLoadAll(fs.readFileSync('src/data/distributions.yaml', 'utf8'))
    } catch (e) {
        console.log('unable to load distributions')
        console.log(e)
    }
    data.forEach(dist =>
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
