import { BreedObject } from './BreedPhotoGridInterfaces'

export interface BreedFilterItemProps {
  breedData: BreedObject
  onClick: (breed: BreedObject) => void
  type: 'add' | 'remove'
}
