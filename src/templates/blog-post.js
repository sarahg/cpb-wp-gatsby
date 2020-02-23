import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  let tagList = [];
  // @todo use <link> tags
  post.tags.forEach((tag) => {
    tagList.push(`<a href="/tag/${tag.slug}">` + tag.name + '</a>')
  });

  return (
    <Layout>
      <SEO title={post.title} />
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <h4 className="byline">Posted by {post.author.name} on {post.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <hr/>
        <div className="tags">Tagged:&nbsp;
          <span dangerouslySetInnerHTML={{ __html: tagList.join(', ') }} />
        </div>
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