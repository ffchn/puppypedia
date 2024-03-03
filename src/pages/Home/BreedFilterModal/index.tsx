import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useContext, useMemo, useState } from 'react'
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

const breedSearchValidationSchema = zod.object({
  breed: zod.string().min(3, 'Inform a breed'),
})

type BreedSearchFormData = zod.infer<typeof breedSearchValidationSchema>

export default function BreedFilterModal({
  isOpen,
  closeModalCallback,
}: ModalProps) {
  const { breedsList } = useContext(HomeContext)

  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([])
  /** https://www.react-hook-form.com/api/useform/
   * register(name, {options})
   * returns form input events ({onChange, onBlur, onFocus...})
   *
   * handleSubmit(function(data))
   * Receives form data and event if validation passes
   *
   * watch(names?: string | string[])
   * Observres changes to specified inputs and returns value
   *
   * reset()
   * triggers form clearup to Default values set in options
   */
  const { register, handleSubmit, watch, reset } = useForm<BreedSearchFormData>(
    {
      resolver: zodResolver(breedSearchValidationSchema),
      defaultValues: {
        breed: '',
      },
    },
  )

  function searchBreedsList(data: any) {
    // todo: fix this
    console.log(data)
    reset()
  }

  function handleCancel() {
    closeModalCallback()
  }

  const handleSelectBreedFilter = useCallback(
    (selectedBreed: string) => {
      if (selectedBreeds.indexOf(selectedBreed) === -1) {
        setSelectedBreeds((state) => [...state, selectedBreed])
        reset()
      }
    },
    [selectedBreeds, reset],
  )

  const handleRemoveBreedFilter = useCallback((selectedBreed: string) => {
    setSelectedBreeds((state) =>
      state.filter((breed) => breed !== selectedBreed),
    )
  }, [])

  const watchInputValue = watch('breed')
  const isSubmitDisabled = !selectedBreeds.length

  const resultsList = useMemo(() => {
    if (watchInputValue.length < 3) return []
    const searchResults = breedsList.filter(
      (breedItem) => breedItem.breed.includes(watchInputValue.toLowerCase()), // gets items from breedlist that contain string from inputValue
    )

    return searchResults
  }, [breedsList, watchInputValue])

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
                onClick={handleRemoveBreedFilter}
              />
            ))
          ) : (
            <span>Search breeds from input below</span>
          )}
        </div>
        <form action="" onSubmit={handleSubmit(searchBreedsList)}>
          <h3>Search for {selectedBreeds.length >= 1 && 'another '} breed:</h3>
          <BreedSearchInput type="text" {...register('breed')} />
          <div className="searchResults">
            {watchInputValue.length >= 3 &&
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
                    <strong>&quot;{watchInputValue}&quot;</strong>
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
            <Button disabled={isSubmitDisabled}>Save</Button>
          </div>
        </form>
      </BreedFilterModalContent>
    </Modal>
  )
}
