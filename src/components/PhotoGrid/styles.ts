import styled from 'styled-components'

interface PhotoGridItemWrapperProps {
  photoUrl: string
}

export const PhotoGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  width: 100%;
`

export const PhotoGridEmptyStateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25rem;
  margin: 10rem auto;

  .emptyStateIcon {
    animation: breathing 2s ease-out infinite normal;
  }

  @keyframes breathing {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.9);
    }

    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.9);
    }
  }

  .emptyStateMessage {
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const PhotoGridItemWraper = styled.div<PhotoGridItemWrapperProps>`
  height: 12.5rem;
  background: ${({ theme }) => theme.colors['gray-100']};
  border-radius: 8px;
  cursor: pointer;
  background: ${({ photoUrl }) => `url('${photoUrl}')`};
  background-position: center;
  background-size: cover;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.shadow.card};
  }
`
