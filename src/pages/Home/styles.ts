import styled from 'styled-components'

export const HomeWrapper = styled.div``

export const EmptyStateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25rem;
  margin: 12.5rem auto;

  .emptyStateIcon {
  }

  .breathing {
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
    text-align: center;
  }
`
