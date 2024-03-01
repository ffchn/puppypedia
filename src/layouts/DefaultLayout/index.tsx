import { ReactElement } from 'react'
import { LayoutContainer, LayoutWrapper } from './styles'
import Header from '../../components/Header'

interface DefaultLayoutProps {
  children: ReactElement
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <LayoutWrapper>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </LayoutWrapper>
  )
}
