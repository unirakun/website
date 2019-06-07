import styled from 'styled-components'
import Stars from 'react-star-rating-component'

export default styled(Stars).attrs(({ theme, name, children }) => ({
  name,
  value: children,
  starColor: theme.light,
  emptyStarColor: '#280b4bce',
  editing: false,
}))`
`
