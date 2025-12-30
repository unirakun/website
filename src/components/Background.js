import styled from "styled-components"

export default styled.div`
  color: ${({ theme, secondary = false }) => {
    if (secondary) return theme.bg
    return theme.fg
  }};
  background-color: ${({ theme, gradient = false, secondary = false }) => {
    if (gradient) return "inherit"
    if (secondary) return theme.fg
    return theme.bg
  }};
  background: ${({ theme, gradient }) => {
    if (gradient) return `linear-gradient(to right, ${theme.bg}, ${theme.fg})`
    return ""
  }};
`
