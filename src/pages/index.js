import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.slug} style={{
          borderBottom: `1px dotted gray`,
          marginBottom: `2em`
        }}>
          <h3 style={{marginBottom: `.25rem`}}><Link to={node.slug}><span dangerouslySetInnerHTML={{ __html: node.title }} /></Link></h3>
          <h4 className="byline">Posted by {node.author.name} on {node.date}</h4>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: {fields: [date], order: DESC}) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MMMM Do, YYYY")
          tags {
            name
          }
          author {
            name
            avatar_urls {
              wordpress_24
            }
          }
        }
      }
    }
  }
 `