/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {

              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      console.log(result, "ERRor")
      return Promise.reject(result.errors)

    }

    const posts = result.data.allMarkdownRemark.edges
console.log(posts, "POSTS from create page")
    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: `/blogtemplate`,
        component: path.resolve(
          `./src/pages/blogtemplate.js`
        ),
        // additional data can be passed via context
        context: `123`,
      })
    })

    // Eliminate duplicate tags


  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
