import styled from 'styled-components'
import { BreedObject } from '../../../interfaces/BreedPhotoGridInterfaces'

interface BreedFilterItemWrapperProps {
  onClick: (props: string | BreedObject) => void
}

export const BreedFilterItemWrapper = styled.span<BreedFilterItemWrapperProps>`
  border-radius: 8px;
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors['gray-100']};
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  cursor: pointer;
  transition-duration: 0.5s;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors['gray-700']};
  }

  .breed {
    margin-right: 1rem;
    text-transform: capitalize;
  }
`