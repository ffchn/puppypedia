import { createContext } from 'react'
import { BreedObject } from '../../interfaces/BreedPhotoGridInterfaces'

interface HomeContextType {
  breedsList: BreedObject[]
  breedFilterList: BreedObject[]
  updateBreedsFilter: (filters: BreedObject[]) => void
}

export const HomeContext = createContext({} as HomeContextType)
