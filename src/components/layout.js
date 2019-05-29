import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import('./brands/style.css')
import('./layout.css')

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <>
        <main>{children}</main>
        <footer
          css={css`
            display: flex;
            flex-direction: row;
            height: 3em;
            background: linear-gradient(to right,#7901c3,#4d6cfa);
            justify-content: center;
            align-items: center;
            color: white;
          `}
        >
          <div>
            © {new Date().getFullYear()}, {data.site.siteMetadata.title} 🦝✨
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
