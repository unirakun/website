import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Image = ({ className, fileName }) => (
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
    render={(data) => (
      <Img
        className={className}
        alt={fileName}
        fluid={
          data.allImageSharp.edges.find(
            (e) => e.node.fluid.src.split("/").pop() === fileName
          ).node.fluid
        }
      />
    )}
  />
)

export default styled(Image)``
