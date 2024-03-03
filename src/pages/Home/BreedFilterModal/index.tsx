import { FormEvent, useCallback, useContext, useMemo, useState } from 'react'
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

export default function BreedFilterModal({
  isOpen,
  closeModalCallback,
}: ModalProps) {
  const [inputValue, setInputValue] = useState<string>('')
  const { breedsList, breedFilterList, updateBreedsFilter } =
    useContext(HomeContext)

  const [selectedBreeds, setSelectedBreeds] =
    useState<string[]>(breedFilterList)

  function searchFormSubmit(e: FormEvent) {
    e.preventDefault()
    updateBreedsFilter(selectedBreeds)
    closeModalCallback()
  }

  function handleCancel() {
    closeModalCallback()
  }

  const handleSelectBreedFilter = useCallback(
    (selectedBreed: string) => {
      if (selectedBreeds.indexOf(selectedBreed) === -1) {
        setSelectedBreeds((state) => [...state, selectedBreed])
      }
    },
    [selectedBreeds],
  )

  const handleRemoveBreedFilter = useCallback((selectedBreed: string) => {
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
            selectedBreeds.map((breed: string) => (
              <BreedFilterItem
                type="remove"
                breedName={breed}
                key={breed}
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
                        breedName={result.breed}
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
              onClick={() => handleCancel()}
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
