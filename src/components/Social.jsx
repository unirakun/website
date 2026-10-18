import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const getPseudo = (text = "") => text.split("/").pop()

// The brands icon font has no "website" glyph, so draw a globe inline.
const Globe = () => (
  <svg
    className="globe"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const Social = ({ className, id, url, text }) => (
  <OutboundLink className={className} href={url}>
    {id === "website" ? <Globe /> : <i className={`brand-${id}`} />}
    {text && (
      <span>
        {id === "twitter" && "@"}
        {getPseudo(url)}
      </span>
    )}
  </OutboundLink>
)

export default styled(Social)`
  color: ${({ theme }) => theme.dark};
  font-size: 2em;
  outline: none;
  text-decoration: none;

  .globe {
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
  }
`
