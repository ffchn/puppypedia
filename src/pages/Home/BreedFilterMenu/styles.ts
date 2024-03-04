import styled from 'styled-components'

export const BreedFilterMenuWrapper = styled.div`
  margin-bottom: 1rem;

  @media screen and (min-width: 640px) {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 200px 1fr;
  }

  .filterButton {
    margin-right: 2rem;
  }

  .filterList {
    @media screen and (min-width: 768px) {
      display: inline-block;
    }
  }
`
