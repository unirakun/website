import React from "react"
import styled from "styled-components"
import { Image } from "."

const getFileName = (fileName) =>
  `${fileName}.png`
    .toLowerCase()
    .replace(/\//g, "")
    .replace(/é/g, "e")
    .split(" ")
    .join("")

const Avatar = ({ className, id }) => (
  <div className={className}>
    <Image className="image" fileName={getFileName(id)} />
  </div>
)

export default styled(Avatar)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10em;
  height: 10em;
  background-color: ${({ color }) => color || "white"};
  border-radius: 50%;
  overflow: hidden;

  ${Image} {
    display: block;
    width: 100%;
  }
`
