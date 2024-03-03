import { X } from 'phosphor-react'
import { Button } from '../Button'
import { BreedFilterItemWrapper, BreedFilterMenuWrapper } from './styles'

interface BreedFilterItemProps {
  breedName: string
}

interface BreedsFilterMenuProps {
  breedsList: Object | null // todo: fix this later
}

function BreedFilterItem({ breedName }: BreedFilterItemProps) {
  return (
    <BreedFilterItemWrapper>
      <span className="breed">{breedName}</span>
      <X size={16} weight="bold" />
    </BreedFilterItemWrapper>
  )
}

// export default function BreedFilterMenu({ breedsList }: BreedsFilterMenuProps) {
export default function BreedFilterMenu({ breedsList }: BreedsFilterMenuProps) {
  console.log('breedslist', breedsList)
  return (
    <BreedFilterMenuWrapper>
      {/* {breedsList.map((breed) => (
        <BreedFilterItem breedName={breed} />
      ))} */}
      <Button type="button" className="filterButton">
        Manage Breeds
      </Button>
      <BreedFilterItem breedName="corgi" />
      <BreedFilterItem breedName="schnauzer" />
      <BreedFilterItem breedName="daschound" />
    </BreedFilterMenuWrapper>
  )
}
