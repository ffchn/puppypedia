import styled from 'styled-components'

interface PhotoGridItemWrapperProps {
  src: string
}

export const PhotoGridWrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  width: 100%;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
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

export const PhotoItemModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  min-width: 20rem;
  max-height: 60vh;

  img {
    max-width: 100%;
  }
`
