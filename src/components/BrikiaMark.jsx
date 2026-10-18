import React from "react"

// The Brikia brick, ported from brikia.app's favicon.svg (without its rounded
// square background so it can sit in a circle).
const CREAM = "rgb(255,247,242)"

const FACES = [
  "95,31.76 67.57,19.05 67.15,36.63 93.79,50.14",
  "67.57,19.05 5,44.39 6.36,63.52 67.15,36.63",
  "32.19,80.95 93.79,50.14 67.15,36.63 6.36,63.52",
  "5,44.39 67.57,19.05 95,31.76 31.56,60.9",
  "31.56,60.9 95,31.76 93.79,50.14 32.19,80.95",
  "5,44.39 31.56,60.9 32.19,80.95 6.36,63.52",
]

const BrikiaMark = ({ size = 28, className }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    role="img"
    aria-label="Brikia"
  >
    {FACES.map((points) => (
      <polygon
        key={points}
        points={points}
        fill={CREAM}
        fillOpacity="0.35"
        stroke={CREAM}
        strokeWidth="5"
        strokeLinejoin="round"
      />
    ))}
  </svg>
)

export default BrikiaMark
