import React from 'react'
import styled from 'styled-components'
import { Image } from '../../../components'

const Avatar = ({ className, fileName }) => (
  <div className={className}>
    <Image fileName={fileName} />
  </div>
)

export default styled(Avatar)`
  width: 10em;
  height: 10em;
  border-radius: 50%;
  overflow: hidden;

  ${Image} {
    display: block;
    width: 100%;
    max-width: 100%;
  }
`
