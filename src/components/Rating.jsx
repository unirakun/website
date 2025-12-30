import React from "react"
import styled from "styled-components"
import Stars from "./Stars"

const Label = styled.label`
  text-align: right;
  margin-right: 0.5em;
`

const Rating = ({ className, name, children }) => (
  <div className={className}>
    <Label>{name}</Label>
    <Stars name={name}>{children}</Stars>
  </div>
)

export default styled(Rating)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 12em;
  padding: 0.3em;
`
