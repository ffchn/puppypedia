import styled from 'styled-components'

export const LayoutWrapper = styled.div``

export const LayoutContainer = styled.div`
  max-width: 75rem;
  margin: 4rem auto;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.card};
  min-height: 60vh;
  max-height: 85vh;
  overflow-y: auto;
`
