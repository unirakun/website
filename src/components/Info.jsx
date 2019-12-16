import React from 'react'
import styled from 'styled-components'
import { Image } from '.'

const Name = styled.span`
`

const Firstname = styled.span`
  font-weight: bold;
  margin-right: 0.3em;
`

const Title = styled.div`
  font-size: 0.8em;
  color: ${({ theme }) => theme.grey};
`

const Info = ({
  className,
  firstName,
  name,
  title,
}) => (
    <div className={className}>
      <span>
        <Firstname>
          {firstName}
        </Firstname>
        <Name>
          {name}
        </Name>
      </span>
      <Title>
        {title}
      </Title>
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
