import React from 'react'
import styled from 'styled-components'
import { Layout, SEO } from '../../components'
import { graphql } from 'gatsby'
import Who from './who'
import Description from './description'
import Experiences from './experiences'

const CV = ({ className, data }) => (
  <Layout>
    <SEO title={`${data.members.who.firstName} ${data.members.who.name}`}/>
    <div className={className}>
      <Who {...data.members} />

      <Description>
        {data.members.description}
      </Description>

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
            children {
              text
            }
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
