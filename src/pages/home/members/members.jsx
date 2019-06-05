import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { ExternalLink } from '../../../components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Avatar from './avatar'
import Card from './card'
import Info from './info'

const InfoLink = styled(OutboundLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  outline: none;
  text-decoration: none;
  & > * {
    margin: 1rem 0;
    text-align: center;
  }
`

const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  ${ExternalLink} {
    color: ${props => props.color}
  }
`

const Members = ({ className }) => {
  const { allMembersJson } = useStaticQuery(
    graphql`
      query {
        allMembersJson {
          edges {
            node {
              name
              firstName
              image
              title
              color
              cv
              links {
                icon
                link
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className={className}>
      {allMembersJson.edges.map(({ node: member }) => (
        <Card key={member.name} >
          <InfoLink href={member.cv}>
            <Avatar fileName={member.image} />
            <Info {...member} />
          </InfoLink>
          <Links color={member.color}>
            {member.links.map(({ link, icon }) => (
              <ExternalLink
                key={icon}
                icon={icon}
                href={link}
              />
            ))}
          </Links>
        </Card>
      ))}
    </div>
  )
}

export default styled(Members)`
  display: flex;  
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
`
