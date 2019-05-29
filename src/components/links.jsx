import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Links = () => {
  const { allLinksJson } = useStaticQuery(
    graphql`
      query {
        allLinksJson {
          edges {
            node {
              icon
              link
            }
          }
        }
      }
    `
  )

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      {allLinksJson.edges.map(({ node: { icon, link } }) => (
        <OutboundLink
          key={icon}
          href={link}
          css={css`
            color: white;
            font-size: 2em;
            outline: none;
            text-decoration: none;
          `}
        >
          <i className={`brand-${icon}`} />
        </OutboundLink>)
      )}
    </div>
  )
}

export default Links
