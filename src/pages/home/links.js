import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Social } from '../../components'

const Links = ({ className }) => {
  const { allSocials } = useStaticQuery(
    graphql`
      query {
        allSocials {
          edges {
            node {
              id
              url
            }
          }
        }
      }
    `
  )

  return (
    <div className={className}>
      {allSocials.edges.map(({ node: { id, url } }) => (
        <Social
          key={id}
          url={url}
          id={id}
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
  bottom: 5%;
`
