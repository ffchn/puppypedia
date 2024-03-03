import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import { BreedFilterItem } from '../BreedFilterItem'
import Modal, { ModalProps } from '../../../components/Modal'
import { Button } from '../../../components/Button'
import { BreedFilterModalContent, BreedSearchInput } from './styles'

const breedSearchValidationSchema = zod.object({
  breed: zod.string().min(3, 'Inform a breed'),
})

type BreedSearchFormData = zod.infer<typeof breedSearchValidationSchema>

export default function BreedFilterModal({
  isOpen,
  closeModalCallback,
}: ModalProps) {
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
      }
    },
    [selectedBreeds],
  )

  const handleRemoveBreedFilter = useCallback((selectedBreed: string) => {
    setSelectedBreeds((state) =>
      state.filter((breed) => breed !== selectedBreed),
    )
  }, [])

  const watchInputValue = watch('breed')
  const isSubmitDisabled = !watchInputValue

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
          <h3>Search for another breed:</h3>
          <BreedSearchInput type="text" {...register('breed')} />
          <div className="searchResults">
            <h5>Breed search results:</h5>
            <BreedFilterItem
              type="add"
              breedName="corgi"
              onClick={handleSelectBreedFilter}
            />
            <BreedFilterItem
              breedName="hound"
              type="add"
              onClick={handleSelectBreedFilter}
            />
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
