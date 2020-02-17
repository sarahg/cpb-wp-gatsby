/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logos from "./logos"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          width: `100%`,
          maxWidth: `960px`,
          margin: `0 auto`,
          display: `grid`,
          gridRowGap: `10px`,
          gridTemplateColumns: `auto 25%`
        }} className="wrapper">

        <Header siteTitle={data.site.siteMetadata.title} />

        <main style={{gridRow: `2 / 3`}}>
            {children}
        </main>
        <aside style={{gridRow: `3 / 4`}}>
          <Logos />
        </aside>

        <footer style={{gridRow: `4 / 5`, fontSize: `small`, padding: `1em 0`}}>
          © {new Date().getFullYear()}, Built with&nbsp;
          <a href="https://www.gatsbyjs.org">Gatsby</a> + <a href="https://wordpress.org">WordPress</a>
          &nbsp;by <a href="https://sarahgerman.com">Sarah German</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
