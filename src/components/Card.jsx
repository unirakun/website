import styled from 'styled-components'

export default styled.div`
  width: calc(100vw - 2em);
  max-width: 25em;
  margin: 1em;
  border-radius: .5em;
  background-color: ${({ bg, theme }) => bg || theme.fg};
  color: ${({ fg, theme }) => fg || theme.bg};
  border: 1px solid ${({ bg, theme }) => bg || theme.bg};

  &:hover {
    box-shadow: 0 0 20px -5px ${({ bg, theme }) => bg || theme.fg};
  }

  & > * {
    margin: 1rem 0;
  }
`