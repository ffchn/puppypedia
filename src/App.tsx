import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from '@tanstack/react-query'
import defaultTheme from './styles/themes/defaultTheme'
import GlobalStyles from './styles/global'
import Home from './pages/Home'
import DefaultLayout from './layouts/DefaultLayout'
import { queryClient } from './api/queryClient'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
