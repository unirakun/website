import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ fileName }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt={fileName}
        fluid={data.allImageSharp.edges.find(e => e.node.fluid.src.split('/').pop() === fileName).node.fluid} 
      />
    )}
  />
)

export default Image
