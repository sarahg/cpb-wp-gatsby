import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Images = () => {
  const data = useStaticQuery(graphql`
    query {
      cpbLogoImage: file(relativePath: { eq: "catparty-logo-circle.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      untappdLogoImage: file(relativePath: { eq: "untappd-logo.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div>
      <Link to="/">
        <Img
          fluid={data.cpbLogoImage.childImageSharp.fluid}
          alt="Cat Party Brewing logo" aria-label="Cat Party Brewing logo"
        />
      </Link>
      <a href="https://untappd.com/CatPartyBrewing" style={{
        textAlign: `center`,
        display: `block`,
        marginTop: `1em`
      }}>
        <Img
          fixed={data.untappdLogoImage.childImageSharp.fixed}
          alt="Untappd logo" aria-label="Untappd logo"
        />
      </a>
    </div>
  )
}

export default Images
