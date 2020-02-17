import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.slug}>
        <h3><Link to={node.slug}><span dangerouslySetInnerHTML={{ __html: node.title }} /></Link></h3>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
 `