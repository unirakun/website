import React from "react"
import styled from "styled-components"
import { Image } from "."

const Name = styled.span``

const Firstname = styled.span`
  font-weight: bold;
  margin-right: 0.3em;
  color: ${({ color, theme }) => color || theme.primary};
`

const Title = styled.div`
  font-size: 0.8em;
  color: ${({ color, theme }) => color || theme.grey};
`

const Info = ({
  className,
  firstName,
  firstNameColor,
  name,
  title,
  titleColor,
}) => (
  <div className={className}>
    <span>
      <Firstname color={firstNameColor}>{firstName}</Firstname>
      <Name>{name}</Name>
    </span>
    <Title color={titleColor}>{title}</Title>
  </div>
)

export default styled(Info)`
  font-size: 2em;
  color: ${({ theme }) => theme.bg};

  & > * {
    margin: 1rem 0;
  }

  ${Image} {
    display: block;
    width: 100%;
    max-width: 100%;
  }
`
