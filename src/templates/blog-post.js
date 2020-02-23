import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  let tagList = [];
  post.tags.forEach((tag) => {
    tagList.push(tag.name)
  });

  return (
    <Layout>
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <h4 className="byline">Posted by {post.author.name} on {post.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="tags">Tagged: {tagList.join(', ')}</div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          date(formatString: "MMMM Do, YYYY")
          tags {
            name
            slug
          }
          author {
            name
            avatar_urls {
              wordpress_48
            }
          }
        }
      }
    }
  }
`