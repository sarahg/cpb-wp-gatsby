import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      gridRow: `1 / 2`,
      padding: `1em 0`,
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `#333`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <h2 style={{
      fontSize: `95%`,
      marginTop: `.35em`,
      fontStyle: `italic`,
      color: `#666`
    }}>misadventures in homebrewing since 2015</h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
