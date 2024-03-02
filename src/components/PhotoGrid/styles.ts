import styled from 'styled-components'

export const PhotoGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`

export const PhotoGridItemWraper = styled.div`
  height: 12.5rem;
  background: ${({ theme }) => theme.colors['gray-100']};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    max-height: 12.5rem;
  }
`
