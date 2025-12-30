import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import Footer from "./Footer"
import "normalize.css"
import "./brands/style.css"
import "./layout.css"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
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
      render={(data) => (
        <>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()}, {data.site.siteMetadata.title} 🦝✨
          </Footer>
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
