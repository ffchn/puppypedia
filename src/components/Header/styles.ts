import styled from 'styled-components'

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.card};

  .logo {
    line-height: 2rem;
    margin-left: 0.5rem;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 1.5rem;

    b {
      color: ${({ theme }) => theme.colors['orange-500']};
    }
  }
`
