import React from 'react'
import styled from 'styled-components'
import { Image } from '../../../components'

const Name = styled.span`
  color: #333;
`

const Title = styled.div`
  font-size: 0.8em;
  color: #6f808a;
`

const Info = ({
  className,
  firstName,
  name,
  title,
}) => (
    <div className={className}>
      <span>
        {`${firstName} `}
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
  color: ${props => props.color};
  
  & > * {
    margin: 1rem 0;
  }

  ${Image} {
    display: block;
    width: 100%;
    max-width: 100%;
  }
`
