import { X } from 'phosphor-react'
import { BreedFilterItemWrapper } from './styles'

interface BreedFilterItemProps {
  breedName: string
}

export function BreedFilterItem({ breedName }: BreedFilterItemProps) {
  return (
    <BreedFilterItemWrapper>
      <span className="breed">{breedName}</span>
      <X size={16} weight="bold" />
    </BreedFilterItemWrapper>
  )
}
