import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.font.size};
    font-family: ${({ theme }) => theme.font.family};
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    margin: ${({ theme }) => theme.spacing.md};
  }
`

export default GlobalStyle
