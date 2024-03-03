import { useState } from 'react'
import { Button } from '../../../components/Button'
import { BreedFilterMenuWrapper } from './styles'
import BreedFilterModal from '../BreedFilterModal'
import { BreedFilterItem } from '../BreedFilterItem'

export default function BreedFilterMenu() {
  const [isModalOpen, setModalOpen] = useState<boolean>(true)

  function handleToggleModal() {
    // setModalOpen(!isModalOpen)
    setModalOpen(isModalOpen)
  }

  return (
    <>
      <BreedFilterModal
        isOpen={isModalOpen}
        closeModalCallback={() => handleToggleModal()}
      />
      <BreedFilterMenuWrapper>
        <Button
          type="button"
          className="filterButton"
          onClick={() => handleToggleModal()}
        >
          Manage Breeds
        </Button>
        <BreedFilterItem breedName="corgi" onClick={() => {}} type="remove" />
        <BreedFilterItem
          breedName="schnauzer"
          onClick={() => {}}
          type="remove"
        />
        <BreedFilterItem
          breedName="daschound"
          onClick={() => {}}
          type="remove"
        />
      </BreedFilterMenuWrapper>
    </>
  )
}
