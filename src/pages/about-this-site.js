import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About this site" />
    <h2>About this site</h2>
    <p>
      This site is about beer, but we can't forget about what drives me to drink in the first place: building websites.
    </p>
    <p>
      I originally built this site as a WordPress blog over on <a href="https://pantheon.io">Pantheon</a>. This latest version still uses the initial
      WordPress install, but the frontend now runs on <a href="https://gatsbyjs.org">GatsbyJS</a> and pulls data from
      the WordPress site via the WP JSON API.
    </p>
    <p>
      Code is hosted on GitHub, and upon a merge to the master branch, we trigger a build over on <a href="https://www.gatsbyjs.com/cloud">Gatsby Cloud</a>.
      Once the build completes, it deploys itself up to <a href="https://www.netlify.com/">Netlify</a>. 
    </p>
    <p>It's a lot of moving parts, but the magic that is Gatsby somehow makes this much easier 
      (and more fun) to work with than vanilla WordPress. Cheers! <span role="img" aria-label="beers emoji">🍻</span></p>
    <p><a href="https://github.com/sarahg/cpb-wp-gatsby">View source on GitHub</a> | <a href="https://github.com/sarahg/wp-cloud-builds">WP Cloud Builds plugin</a></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
