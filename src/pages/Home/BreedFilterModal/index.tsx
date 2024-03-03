import {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Dog } from 'phosphor-react'
import { BreedFilterItem } from '../BreedFilterItem'
import Modal, { ModalProps } from '../../../components/Modal'
import { Button } from '../../../components/Button'
import {
  BreedFilterModalContent,
  BreedSearchInput,
  BreedSearchNotFound,
} from './styles'
import { HomeContext } from '../HomeContext'
import { BreedObject } from '../../../interfaces/BreedPhotoGridInterfaces'

export default function BreedFilterModal({
  isOpen,
  closeModalCallback,
}: ModalProps) {
  const [inputValue, setInputValue] = useState<string>('')
  const { breedsList, breedFilterList, updateBreedsFilter } =
    useContext(HomeContext)

  const [selectedBreeds, setSelectedBreeds] = useState<BreedObject[]>([])

  function searchFormSubmit(e: FormEvent) {
    e.preventDefault()
    updateBreedsFilter(selectedBreeds)
    closeModalCallback()
  }

  useEffect(() => {
    // resets filters and input value when modal toggles
    setSelectedBreeds(breedFilterList)
    setInputValue('')
  }, [breedFilterList, isOpen])

  const handleSelectBreedFilter = useCallback(
    (selectedBreed: BreedObject) => {
      // checks in selectedBreeds state if filter isnt already present before pushing
      if (!selectedBreeds.find((breed) => breed === selectedBreed)) {
        setSelectedBreeds((state) => [...state, selectedBreed])
      }
    },
    [selectedBreeds],
  )

  const handleRemoveBreedFilter = useCallback((selectedBreed: BreedObject) => {
    setSelectedBreeds((state) =>
      state.filter((breed) => breed !== selectedBreed),
    )
  }, [])

  function handleChangeInput(e: FormEvent<HTMLInputElement>) {
    setInputValue(e.currentTarget.value)
  }

  const isSubmitDisabled = !selectedBreeds.length

  const resultsList = useMemo(() => {
    if (inputValue.length < 3) return []
    const searchResults = breedsList.filter(
      (breedItem) => breedItem.breed.includes(inputValue.toLowerCase()), // gets items from breedlist that contain string from inputValue
    )

    return searchResults
  }, [breedsList, inputValue])

  return (
    <Modal isOpen={isOpen} closeModalCallback={closeModalCallback}>
      <BreedFilterModalContent>
        <h2>Manage Breeds</h2>

        <h3>Selected</h3>
        <div className="selectedBreedOptions">
          {selectedBreeds.length ? (
            selectedBreeds.map((breed: BreedObject) => (
              <BreedFilterItem
                type="remove"
                breedData={breed}
                key={breed.breed}
                onClick={handleRemoveBreedFilter}
              />
            ))
          ) : (
            <span>Search breeds from input below</span>
          )}
        </div>
        <form action="" onSubmit={searchFormSubmit}>
          <h3>Search for {selectedBreeds.length >= 1 && 'another '} breed:</h3>
          <BreedSearchInput
            type="text"
            onChange={(e) => handleChangeInput(e)}
            value={inputValue}
          />
          <div className="searchResults">
            {inputValue.length >= 3 &&
              (resultsList.length >= 1 ? (
                <>
                  <h5>Breed search results:</h5>

                  <div className="resultsListWrapper">
                    {resultsList.map((result) => (
                      <BreedFilterItem
                        type="add"
                        key={result.breed}
                        breedData={result}
                        onClick={handleSelectBreedFilter}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <BreedSearchNotFound>
                  <Dog size={24} />{' '}
                  <span>
                    Oof! No results found for{' '}
                    <strong>&quot;{inputValue}&quot;</strong>
                  </span>
                </BreedSearchNotFound>
              ))}
          </div>
          <div className="searchFormActions">
            <Button
              type="button"
              variant="outlined"
              onClick={closeModalCallback}
            >
              Cancel
            </Button>
            <Button disabled={isSubmitDisabled} type="submit">
              Save
            </Button>
          </div>
        </form>
      </BreedFilterModalContent>
    </Modal>
  )
}
