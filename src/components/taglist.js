import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const TagList = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressTag(sort: { fields: count, order: DESC }, limit: 6) {
        edges {
          node {
            name
            slug
            count
          }
        }
      }
    }
  `)

  return (
    <div style={{padding: `0 1em`}}>
      <h3 style={{marginBottom: `1rem`}}>Top tags</h3>
      <ul>
        {data.allWordpressTag.edges.map(({ node }) => (
          <li style={{marginBottom: `3%`}}>
            <Link to={`/tag/${node.slug}/`}>{node.name}</Link> ({node.count})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagList
