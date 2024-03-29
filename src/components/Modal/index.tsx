import { Props as ReactModalProps } from 'react-modal'
import { ModalContainer, ModalWrapper } from './styles'

export interface ModalProps extends ReactModalProps {
  closeModalCallback: () => void
}

export default function Modal({
  isOpen,
  closeModalCallback,
  children,
}: ModalProps) {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,.2)',
    },
    content: {
      inset: 'auto',
    },
  }

  function handleCloseModal(e: React.MouseEvent | React.KeyboardEvent) {
    e.stopPropagation()
    closeModalCallback()
  }

  return (
    <ModalWrapper
      isOpen={isOpen}
      onRequestClose={(e) => handleCloseModal(e)}
      style={customStyles}
      ariaHideApp={false}
    >
      <ModalContainer>{children}</ModalContainer>
    </ModalWrapper>
  )
}
