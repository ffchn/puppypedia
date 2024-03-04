import styled from 'styled-components'
import { BreedObject } from '../../../interfaces/BreedPhotoGridInterfaces'

interface BreedFilterItemWrapperProps {
  onClick: (props: string | BreedObject) => void
  subbreeds?: boolean
}

export const BreedFilterItemWrapper = styled.span<BreedFilterItemWrapperProps>`
  border-radius: 8px;
  padding: 0.5rem;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors['gray-100']};
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  transition-duration: 0.5s;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors['gray-600']};
  }

  .breed {
    margin-right: 1rem;
    text-transform: capitalize;
  }
`
