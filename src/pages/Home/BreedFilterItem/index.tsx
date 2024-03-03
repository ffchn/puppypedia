import { Plus, X } from 'phosphor-react'
import { BreedFilterItemWrapper } from './styles'
import { BreedFilterItemProps } from '../../../interfaces/BreedFiltersInterfaces'

export function BreedFilterItem({
  breedData,
  onClick,
  type,
}: BreedFilterItemProps) {
  function handleFilterItemCallback() {
    onClick(breedData)
  }

  return (
    <BreedFilterItemWrapper onClick={() => handleFilterItemCallback()}>
      <span className="breed">{breedData.breed}</span>
      {type === 'add' ? (
        <Plus size={16} weight="bold" />
      ) : (
        <X size={16} weight="bold" />
      )}
    </BreedFilterItemWrapper>
  )
}
