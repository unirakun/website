const path = require(`path`)
const data = require('./src/data')

exports.sourceNodes = ({ actions, createContentDigest }) => {
  const { createNode } = actions

  const makeNode = ([key, value]) => {
    value.forEach(({ id, ...subValues }) => {
      createNode({
        ...subValues,
        id,
        internal: {
          type: key,
          contentDigest: createContentDigest(subValues)
        }
      })
    })
  }

  Object.entries(data).forEach(makeNode)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMembers {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    result.data.allMembers.edges.forEach(({ node }) => {
      createPage({
        path: node.id,
        component: path.resolve(`./src/templates/cv/cv.jsx`),
        context: {
          id: node.id,
        },
      })
    })
  })
}
