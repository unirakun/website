import React, { useCallback, useRef } from "react"
import styled, { keyframes } from "styled-components"

// The wagle puppy, ported from wagle's frontend (wagle-mark.tsx + module css).
// Nested per-bone rotations; each joint re-runs the same keyframes with a
// negative delay so the sweep travels root->tip. Hover accelerates the wag via
// playbackRate: a uniform time-scale that keeps the per-joint phase lags locked
// (changing CSS durations desyncs the bones).
const AMBER = "#f2a93b"
const AMBER_DEEP = "#cd850d"
const HOVER_RATE = 2
const TWEEN_MS = 400

const wag = keyframes`
  from { transform: rotate(var(--sweep, 7deg)); }
  to { transform: rotate(calc(-1 * var(--sweep, 7deg))); }
`

const Svg = styled.svg`
  --wag-speed: 5;

  .wag {
    transform-box: view-box;
    animation: ${wag} calc(0.85s / var(--wag-speed, 1)) ease-in-out infinite
      alternate;
    animation-delay: calc(var(--del, 0s) / var(--wag-speed, 1));
  }

  @media (prefers-reduced-motion: reduce) {
    .wag {
      animation: none;
    }
  }
`

const bone = (origin, sweep, del) => ({
  transformOrigin: origin,
  "--sweep": sweep,
  ...(del ? { "--del": del } : {}),
})

const WagleMark = ({ size = 28, className }) => {
  const ref = useRef(null)
  const raf = useRef(0)

  const tween = useCallback((to) => {
    const svg = ref.current
    if (!svg || typeof svg.getAnimations !== "function") return
    const anims = svg.getAnimations({ subtree: true })
    if (anims.length === 0) return
    const from = anims[0].playbackRate
    const t0 = performance.now()
    cancelAnimationFrame(raf.current)
    const step = (t) => {
      const p = Math.min(1, (t - t0) / TWEEN_MS)
      const eased = p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2
      const rate = from + (to - from) * eased
      for (const a of anims) a.updatePlaybackRate(rate)
      if (p < 1) raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
  }, [])

  return (
    <Svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      onMouseEnter={() => tween(HOVER_RATE)}
      onMouseLeave={() => tween(1)}
    >
      <path
        fill={AMBER}
        d="M24.5 27.6 C 30.5 26.2 37.6 28.8 41.9 33.6 C 45.9 38.2 47.2 44.6 45.3 49.8 C 43.9 53.8 39.9 56.4 34.9 56.5 L 24.4 56.5 C 19.2 56.4 15.7 53.2 15.1 48.6 C 14.6 44.8 14.9 40.9 15.8 37.6 C 13.6 36.4 11.6 35.2 10.2 33.4 C 8.9 31.6 9.0 29.2 10.2 27.8 C 11.4 26.2 13.0 23.9 14.2 21.6 C 15.3 19.4 17.3 18.2 19.6 18.2 C 22.8 18.3 25.4 20.3 26.4 23.3 C 27.1 25.2 26.4 26.9 24.5 27.6 Z"
      />
      <path
        fill={AMBER_DEEP}
        d="M20.6 18.5 C 24 17.9 26.9 19.8 27.7 22.9 C 28.3 25.3 27.4 27.6 25.4 28.7 C 23.3 27.5 21.6 25.4 20.7 22.9 C 20.3 21.5 20.4 19.9 20.6 18.5 Z"
      />
      <circle cx="9.3" cy="30" r="2" fill={AMBER_DEEP} />
      <circle cx="15.3" cy="25.7" r="1.4" fill={AMBER_DEEP} />
      <g
        className="wag"
        style={bone("40.5px 44px", "7deg")}
        fill="none"
        stroke={AMBER_DEEP}
        strokeLinecap="round"
      >
        <path d="M40.5 42.95 L 42.6 39.6" strokeWidth="5.2" />
        <g className="wag" style={bone("42.9px 39.2px", "7deg", "-.22s")}>
          <path
            d="M41.5 41.4 C 42.7 39.0 43.8 37.1 44.6 35.4"
            strokeWidth="5.2"
          />
          <g className="wag" style={bone("44.1px 36.8px", "8deg", "-.44s")}>
            <path
              d="M43.2 38.1 C 44.2 36.1 45.1 34.2 45.6 32.5"
              strokeWidth="5.2"
            />
            <g className="wag" style={bone("45.2px 33.6px", "10deg", "-.66s")}>
              <path
                d="M44.5 35.0 C 45.3 33.0 46.0 30.6 46.1 28.5"
                strokeWidth="5.2"
              />
            </g>
          </g>
        </g>
      </g>
    </Svg>
  )
}

export default WagleMark
