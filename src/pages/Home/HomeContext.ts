import { createContext } from 'react'
import { BreedObject } from '../../interfaces/BreedPhotoGridInterfaces'

interface HomeContextType {
  breedsList: BreedObject[]
  breedFilterList: string[]
  updateBreedsFilter: (list: string[]) => void
}

export const HomeContext = createContext({} as HomeContextType)
