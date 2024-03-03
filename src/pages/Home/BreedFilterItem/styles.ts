import styled from 'styled-components'

export const BreedFilterItemWrapper = styled.span`
  border-radius: 8px;
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors['gray-100']};
  margin-right: 1rem;
  cursor: pointer;
  transition-duration: 0.5s;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors['orange-700']};
  }

  .breed {
    margin-right: 1rem;
    text-transform: capitalize;
  }
`
