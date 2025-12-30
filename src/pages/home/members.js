import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { Social, Avatar , Card, Info} from '../../components'

const InfoLink = styled(Link)`
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
  font-size: 0.7em;
  display: flex;
  justify-content: space-evenly;

  ${Social} {
    color: ${props => props.color}
  }
`

const Members = ({ className }) => {
  const { allMembers } = useStaticQuery(
    graphql`
      {
        allMembers {
          edges {
            node {
              id
              who {
                name
                firstName
                title
                color
                socials {
                  id
                  url
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className={className}>
      {allMembers.edges.map(({ node: { id, who } }) => (
        <Card key={id} >
          <InfoLink to={`/${id}`}>
            <Avatar id={id} />
            <Info {...who} />
          </InfoLink>
          <Links>
            {who.socials.map(({ id, url }) => (
              <Social
                key={id}
                id={id}
                url={url}
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
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  min-height: 40em;
    background-color: #ededed;


  ${Social} {
    color: ${({ theme }) => theme.light};
  }
`
