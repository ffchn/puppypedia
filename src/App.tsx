import { ThemeProvider } from 'styled-components'
import defaultTheme from './styles/themes/defaultTheme'
import GlobalStyles from './styles/global'
import Home from './pages/Home'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}
