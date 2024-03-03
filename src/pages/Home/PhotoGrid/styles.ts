import styled from 'styled-components'

interface PhotoGridItemWrapperProps {
  src: string
}

export const PhotoGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  width: 100%;
`

export const PhotoGridItemWraper = styled.div<PhotoGridItemWrapperProps>`
  height: 12.5rem;
  background: ${({ theme }) => theme.colors['gray-100']};
  border-radius: 8px;
  cursor: pointer;
  background: ${({ src }) => `url('${src}')`};
  background-position: center;
  background-size: cover;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.shadow.card};
  }
`
