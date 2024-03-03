export interface BreedFilterItemProps {
  breedName: string
  onClick: (breed: string) => void
  type: 'add' | 'remove'
}
