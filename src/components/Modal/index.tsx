import { useState } from 'react'

import { ModalContainer, ModalWrapper } from './styles'

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true)
  const customStyles = {
    overlay: {
      backgroundColor: 'transparent',
    },
    content: {
      inset: 'auto',
    },
  }

  function handleCloseModal(e: React.MouseEvent | React.KeyboardEvent) {
    e.stopPropagation()
    setIsOpen(false)
  }

  return (
    <ModalWrapper
      isOpen={isOpen}
      onRequestClose={(e) => handleCloseModal(e)}
      style={customStyles}
    >
      <ModalContainer>
        <h1>test</h1>
      </ModalContainer>
    </ModalWrapper>
  )
}
