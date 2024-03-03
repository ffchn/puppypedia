import { useContext, useState } from 'react'
import { Button } from '../../../components/Button'
import { BreedFilterMenuWrapper } from './styles'
import BreedFilterModal from '../BreedFilterModal'
import { BreedFilterItem } from '../BreedFilterItem'
import { HomeContext } from '../HomeContext'

export default function BreedFilterMenu() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const { breedFilterList, updateBreedsFilter } = useContext(HomeContext)

  function handleToggleModal() {
    setModalOpen(!isModalOpen)
  }

  function removeFilter(breed: string) {
    const updatedFilters = breedFilterList.filter((filter) => filter !== breed)
    updateBreedsFilter(updatedFilters)
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
          breedFilterList.map((breed) => (
            <BreedFilterItem
              type="remove"
              key={`filter-${breed}`}
              breedName={breed}
              onClick={() => removeFilter(breed)}
            />
          ))}
      </BreedFilterMenuWrapper>
    </>
  )
}
