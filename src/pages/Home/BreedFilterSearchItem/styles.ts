import styled from 'styled-components'
// import { BreedObject } from '../../../interfaces/BreedPhotoGridInterfaces'

interface BreedFilterItemWrapperProps {
  // onClick: (props: string | BreedObject) => void
  subbreeds?: boolean
}

export const BreedFilterItemWrapper = styled.span<BreedFilterItemWrapperProps>`
  border-radius: 8px;
  padding: 0.5rem;
  display: inline-flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors['gray-100']};
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  transition-duration: 0.5s;
  font-weight: bold;
  cursor: pointer;
  width: ${({ subbreeds }) => (subbreeds ? '100%' : 'auto')};

  .mainBreedWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors['gray-600']};
  }

  .breed {
    margin-right: 1rem;
    text-transform: capitalize;
  }
`

export const SubbreedItemListWrapper = styled.div`
  display: flex;
  margin: 0.25rem 0;
  padding: 0 0.25rem;
  flex-wrap: wrap;
`

export const SubbreedFilterItemWrapper = styled(BreedFilterItemWrapper)`
  background-color: ${({ theme }) => theme.colors['gray-300']};
  flex-direction: row;
  &:hover {
    background-color: ${({ theme }) => theme.colors['orange-500']};
  }
`
