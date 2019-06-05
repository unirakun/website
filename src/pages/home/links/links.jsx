import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { ExternalLink } from '../../../components'

const Links = ({ className }) => {
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
    <div className={className}>
      {allLinksJson.edges.map(({ node: { icon, link } }) => (
        <ExternalLink
          key={icon}
          href={link}
          icon={icon}
        />
      ))}
    </div>
  )
}

export default styled(Links)`
  display: flex;  
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 80%;
  max-width: 50em;
  bottom: 10%;
`
