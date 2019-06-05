import React from 'react'
import styled from 'styled-components'
import { SEO, Layout } from '../../components'
import Members from './members/members'
import Links from './links'
import Logo from '../../images/rakun-logo.svg'

const Banner = styled(Logo)`
  position: absolute;
  width: 80%;
  max-width: 50em;
  user-select: none;
`

const MembersStyled = styled(Members)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40em;
`

const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right,#7901c3,#4d6cfa);
`

const Home = () => (
  <Layout>
    <SEO title='Team' />
    <Content>
      <Banner />
      <Links />
    </Content>
    <Members />
  </Layout>
)

export default Home
