import React from "react"
import Particles from 'react-particles-js'
import useWindowSize from '@rehooks/window-size'
import { css } from '@emotion/core'

const ParticlesComponent = () => {
  let scale = 1
  if (typeof window !== 'undefined') {
    import('pathseg')
    const { innerWidth } = useWindowSize()
    scale = (innerWidth / 560) * 1.5
  }

  return (
    <>
      <Particles
        css={css`
        position: absolute;
        width: 100%;
        height: 100%;
      `}
        params={{
          "fps_limit": 60,
          "particles": {
            "number": {
              "value": 150 * scale,
            },
            "line_linked": {
              "enable": false,
              "distance": 10,
              "opacity": 0.7
            },
            "move": {
              "speed": 1
            },
            "opacity": {
              "anim": {
                "enable": true,
                "opacity_min": 0,
                "speed": 5,
                "sync": false
              },
              "value": 1
            }
          },
          "polygon": {
            "enable": true,
            "type": "inline",
            "move": {
              "radius": 10
            },
            scale,
            "url": "/rakun.svg",
            "inline": {
              "arrangement": "equidistant"
            },
            "draw": {
              "enable": false,
            }
          },
          "retina_detect": true,
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
            },
            "modes": {
              "bubble": {
                "size": 4,
                "distance": 40 * scale
              }
            }
          }
        }}
      />
    </>
  )
}

export default ParticlesComponent
