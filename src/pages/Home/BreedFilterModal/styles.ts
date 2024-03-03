import styled from 'styled-components'

export const BreedFilterModalContent = styled.div`
  width: 25rem;

  h2 {
    margin-bottom: 1rem;
  }

  h3,
  h5 {
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

  .searchResults {
    min-height: 2rem;
  }

  .resultsListWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
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
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
`

export const BreedSearchNotFound = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`
