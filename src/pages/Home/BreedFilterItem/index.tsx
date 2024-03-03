import { Plus, X } from 'phosphor-react'
import { BreedFilterItemWrapper } from './styles'
import { BreedFilterItemProps } from '../../../interfaces/BreedFiltersInterfaces'

export function BreedFilterItem({
  breedName,
  onClick,
  type,
}: BreedFilterItemProps) {
  function handleFilterItemCallback() {
    onClick(breedName)
  }

  return (
    <BreedFilterItemWrapper onClick={() => handleFilterItemCallback()}>
      <span className="breed">{breedName}</span>
      {type === 'add' ? (
        <Plus size={16} weight="bold" />
      ) : (
        <X size={16} weight="bold" />
      )}
    </BreedFilterItemWrapper>
  )
}
