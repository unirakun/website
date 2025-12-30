import React from 'react'
import styled from 'styled-components'
import { Layout, Seo } from '../../components'
import { graphql, Link } from 'gatsby'
import Who from './who'
import Description from './description'
import Experiences from './experiences'

const GoToHome = styled(Link)`
  position: absolute;
  top: 1em;
  left: 1em;
  z-index: 1;
  outline: none;
  text-decoration: none;
  color: white;
  font-size: 2em;
  
  @media print {
    display: none;
  }
`

const CV = ({ className, data }) => (
  <Layout>
    <Seo title={`${data.members.who.firstName} ${data.members.who.name}`}/>
    <div className={className}>
      <GoToHome to="/">
        <i className="brand-left-arrow" />
      </GoToHome>
      
      <Who {...data.members} />

      <Description dangerouslySetInnerHTML={{__html: data.members.description}} />

      <Experiences>
        {data.members.experiences}
      </Experiences>
    </div>
  </Layout>
)

export default styled(CV)`
  display: grid;
  background-color: #f3f3f3;
  color: #323232;
  grid-template-areas:
    "who"
    "description"
    "experiences";

  @media print {
    background-color: white;
  }
`

export const query = graphql`
  query($id: String!) {
    members(id: {eq: $id}) {
      id
      next
      who {
        name
        firstName
        what
        birthday
        worksSince
        socials {
          id
          url
        }
        color
        title
      }
      skills {
        name
        skills {
          name
          note
        }
      }
      experiences {
        client {
          color
          name
        }
        dates {
          from
          to
        }
        for {
          color
          name
        }
        informations {
          children {
            text
          }
          text
        }
        title
      }
      description
    }
  }
`
