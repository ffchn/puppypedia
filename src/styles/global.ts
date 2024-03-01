import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['orange-300']};
    }

    body {
        background-color: ${({ theme }) => theme.colors['gray-100']};
        color: ${({ theme }) => theme.colors['gray-700']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`

export default GlobalStyles
