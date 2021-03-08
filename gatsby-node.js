// Define a template for blog post
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const novostiPost = path.resolve(`./src/templates/novosti-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        projekt: wpgraphql {
          wp_projekti(first: 50) {
            edges {
              node {
                id
                slug
                wp_projektId
              }
            }
          }
          wp_novosti {
            edges {
              node {
                wp_novostId
                id
                slug
              }
            }
          }
        }
      }
    `
  )

  // if (result.errors) {
  //   reporter.panicOnBuild(
  //     `There was an error loading your blog posts`,
  //     result.errors
  //   )
  //   return
  // }

  const posts = result.data.projekt.wp_projekti.edges
  const novosti = result.data.projekt.wp_novosti.edges

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: `/projekti/${post.node.slug}`,
        component: blogPost,
        context: {
          slug: post.node.slug,
        },
      })
    })
  }

  if (novosti.length > 0) {
    novosti.forEach(post => {
      createPage({
        path: `/novosti/${post.node.slug}`,
        component: novostiPost,
        context: {
          slug: post.node.slug,
        },
      })
    })
  }
}
