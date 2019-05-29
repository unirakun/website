import React from "react"
import { css } from "@emotion/core"
import { SEO, Layout, Members, Links, Particles } from "../components"
import Banner from "../images/rakun-banner.svg"


const IndexPage = () => (
  <Layout>
    <SEO title="Team" />
    <div
      css={css`
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to right,#7901c3,#4d6cfa);
      `}
    >
      <Banner
        css={css`
          position: absolute;
          width: 80%;
          max-width: 50em;
          user-select: none;
        `}
      />
      <Particles />
      <div
        css={css`
          position: absolute;
          width: 80%;
          max-width: 50em;
          bottom: 10%;
        `}
      >
        <Links />
      </div>
    </div>
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 40em;
      `}
    >
      <Members />
    </div>
  </Layout>
)

export default IndexPage
