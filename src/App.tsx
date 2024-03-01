import { ThemeProvider } from 'styled-components'
import defaultTheme from './styles/themes/defaultTheme'
import GlobalStyles from './styles/global'
import Home from './pages/Home'
import DefaultLayout from './layouts/DefaultLayout'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </ThemeProvider>
  )
}
