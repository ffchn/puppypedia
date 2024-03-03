import styled from 'styled-components'

export const BreedFilterModalContent = styled.div`
  width: 20rem;

  h2 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  .selectedBreedOptions {
    margin-bottom: 1rem;
  }

  .searchFormActions {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    button {
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

export const BreedSearchInput = styled.input`
  cursor: text;
  background-color: ${({ theme }) => theme.colors['gray-50']};
  width: 100%;
  margin-bottom: 1rem;
  border: none;
  padding: 0.5rem;
  text-indent: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-600']};
`
