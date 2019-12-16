import React from 'react'
import styled from 'styled-components'
import { SEO, Layout, Background } from '../../components'
import Members from './members'
import Links from './links'
import Logo from '../../images/us/unirakun.svg'

const Banner = styled(Logo)`
  position: absolute;
  width: 80%;
  max-width: 50em;
  user-select: none;
`

const Header = styled(Background)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
`

const Home = () => (
  <Layout>
    <SEO title='Team' />
    <Header>
      <Banner />
      <Links />
    </Header>
    <Members />
  </Layout>
)

export default Home
