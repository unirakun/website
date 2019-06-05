import React from "react"
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ExternalLink = ({
  className,
  icon,
  href,
  children,
}) => (
  <OutboundLink
    className={className}
    href={href}
  >
    {icon && <i className={`brand-${icon}`} />}
    {children}
  </OutboundLink>
)

export default styled(ExternalLink)`
  color: white;
  font-size: 2em;
  outline: none;
  text-decoration: none;
`
