import React from "react"
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const getPseudo = (text = '') => text.split('/').pop()

const Social = ({
  className,
  id,
  url,
  text,
}) => (
  <OutboundLink
    className={className}
    href={url}
  >
    <i className={`brand-${id}`} />
    {text && (
      <span>
        {(id === 'twitter') && '@'}
        {getPseudo(url)}
      </span>
    )}
  </OutboundLink>
)

export default styled(Social)`
  color: white;
  font-size: 2em;
  outline: none;
  text-decoration: none;
`
