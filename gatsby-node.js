// Define a template for blog post
const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        objekt: wpgraphql {
          posts {
            edges {
              node {
                slug
                postId
                id
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

  const posts = result.data.objekt.posts.edges

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: `/objekt/${post.node.slug}`,
        component: blogPost,
        context: {
          slug: post.node.slug,
        },
      })
    })
  }
}
