import React, { useCallback } from 'react'
import { useSpring, interpolate } from 'react-spring'
import styled from 'styled-components'
import { SEO, Layout, Background } from '../../components'
import Members from './members'
import Links from './links'
import Banner from './animateBanner'

const StyledBanner = styled(Banner)`
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

const Home = () => {
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
  const interpEye = interpolate([st, xy], (o, xy) => `translate(
    ${Math.max(-15, Math.min(15, xy[0] / 30))},
    ${Math.max(-10, Math.min(10, xy[1] / 30 + o / 2))})`)
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 1.5, y - window.innerHeight / 3] }), [set])

  return (
    <Layout>
      <SEO title='Team' />
      <Header onMouseMove={onMove}>
        <StyledBanner interpEye={interpEye}/>
        <Links />
      </Header>
      <Members />
    </Layout>
  )
}

export default Home
