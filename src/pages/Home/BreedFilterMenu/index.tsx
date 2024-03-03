import { X } from 'phosphor-react'
import { Button } from '../../../components/Button'
import { BreedFilterItemWrapper, BreedFilterMenuWrapper } from './styles'
import BreedFilterModal from '../BreedFilterModal'
// import { BreedObject } from '../../interfaces/BreedPhotoGridInterfaces'

interface BreedFilterItemProps {
  breedName: string
}

// interface BreedsFilterMenuProps {
//   breedsList: BreedObject[]
// }

function BreedFilterItem({ breedName }: BreedFilterItemProps) {
  return (
    <BreedFilterItemWrapper>
      <span className="breed">{breedName}</span>
      <X size={16} weight="bold" />
    </BreedFilterItemWrapper>
  )
}

// export default function BreedFilterMenu({ breedsList }: BreedsFilterMenuProps) {
export default function BreedFilterMenu() {
  return (
    <>
      <BreedFilterModal />
      <BreedFilterMenuWrapper>
        {/* {breedsList.map((breed) => (
        <BreedFilterItem breedName={breed.breed} />
      ))} */}
        <Button type="button" className="filterButton">
          Manage Breeds
        </Button>
        <BreedFilterItem breedName="corgi" />
        <BreedFilterItem breedName="schnauzer" />
        <BreedFilterItem breedName="daschound" />
      </BreedFilterMenuWrapper>
    </>
  )
}
