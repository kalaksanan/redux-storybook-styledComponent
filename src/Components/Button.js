import styled, { css } from 'styled-components'
import { Button } from '@material-ui/core'

// const Button = styled.button`
//   padding: 10px;
//   margin: 10px;
//   border: 2px solid #fb9300;
//   cursor: pointer;
//   ${(props) =>
//     props.darkMode &&
//     css`
//       background-color: gray;
//     `}
// `

const SalesButton = styled(Button)`
  background-color: orange;
  &:hover {
    background-color: orange;
    outline: 1px solid #fb9300;
  }
`
export { SalesButton }
export default Button
