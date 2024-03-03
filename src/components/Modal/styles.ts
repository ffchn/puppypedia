import styled from 'styled-components'
import Modal from 'react-modal'

export const ModalWrapper = styled(Modal)`
  background: transparent;
`

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadowcard};
  padding: 1rem;
  margin: 0 auto;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`
