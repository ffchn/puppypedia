import { useContext, useState } from 'react'
import { Button } from '../../../components/Button'
import { BreedFilterMenuWrapper } from './styles'
import BreedFilterModal from '../BreedFilterModal'
import BreedFilterItem from '../BreedFilterItem'
import { HomeContext } from '../HomeContext'
import { BreedObject } from '../../../interfaces/BreedPhotoGridInterfaces'

export default function BreedFilterMenu() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const { breedFilterList, updateBreedsFilter } = useContext(HomeContext)

  function handleToggleModal() {
    setModalOpen(!isModalOpen)
  }

  function removeFilter(breedFilterToRemove: BreedObject) {
    const updatedFilters = breedFilterList.filter(
      (filter) => filter.breed !== breedFilterToRemove.breed,
    )
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
        <div className="filterList">
          {breedFilterList.length >= 1 &&
            breedFilterList.map((breed, index) => (
              <BreedFilterItem
                type="remove"
                // disabling following rule as we dont have unique IDs for now
                // eslint-disable-next-line react/no-array-index-key
                key={`filter-${breed}-${index}`}
                breedData={breed}
                onClick={() => removeFilter(breed)}
              />
            ))}
        </div>
      </BreedFilterMenuWrapper>
    </>
  )
}
