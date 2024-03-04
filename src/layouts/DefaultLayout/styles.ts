import styled from 'styled-components'

export const LayoutWrapper = styled.div``

export const LayoutContainer = styled.div`
  max-width: 62.5rem;
  margin: 2rem auto;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.card};
  min-height: 60vh;

  @media screen and (min-width: 640px) {
    margin-top: 4rem;
    max-width: 65rem;
  }
`
