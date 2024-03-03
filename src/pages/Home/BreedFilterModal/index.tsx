import Modal, { ModalProps } from '../../../components/Modal'
import { BreedFilterItem } from '../BreedFilterItem'

export default function BreedFilterModal({
  isOpen,
  closeModalCallback,
}: ModalProps) {
  return (
    <Modal isOpen={isOpen} closeModalCallback={closeModalCallback}>
      <h2>Manage Breeds</h2>

      <h3>Selected</h3>
      <div className="selectedBreedOptions">
        <BreedFilterItem breedName="corgi" />
        <BreedFilterItem breedName="corgi" />
        <BreedFilterItem breedName="corgi" />
      </div>

      <h3>Search for another breed:</h3>
      <input type="text" />
    </Modal>
  )
}
