const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      posts: allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
          }
        }
      },
      tags: allWordpressTag {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `).then(result => {
    // Create post pages
    result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    });
    // Create tag pages
    result.data.tags.edges.forEach(({ node }) => {
      createPage({
        path: 'tag/' + node.slug,
        component: path.resolve(`./src/templates/tag.js`),
        context: {
          slug: node.slug,
          name: node.name
        },
      })
    })

  })
}