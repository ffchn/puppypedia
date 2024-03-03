import { useContext, useState } from 'react'
import { Button } from '../../../components/Button'
import { BreedFilterMenuWrapper } from './styles'
import BreedFilterModal from '../BreedFilterModal'
import { BreedFilterItem } from '../BreedFilterItem'
import { HomeContext } from '../HomeContext'

export default function BreedFilterMenu() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const { breedFilterList } = useContext(HomeContext)

  function handleToggleModal() {
    setModalOpen(!isModalOpen)
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
        {breedFilterList.length >= 1 &&
          breedFilterList.map((filter) => (
            <BreedFilterItem
              type="remove"
              breedName={filter}
              onClick={() => {}}
            />
          ))}
      </BreedFilterMenuWrapper>
    </>
  )
}
