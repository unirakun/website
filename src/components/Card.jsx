import styled from 'styled-components'

export default styled.div`
  width: calc(100vw - 2em);
  max-width: 25em;
  margin: 1em;
  border-radius: .5em;
  background-color: ${({ theme }) => theme.fg};
  color: ${({ theme }) => theme.bg};

  &:hover {
    box-shadow: 0 0 20px -5px black;
  }

  & > * {
    margin: 1rem 0;
  }
`
