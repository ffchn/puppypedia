import { createContext } from 'react'
import { BreedObject } from '../../interfaces/BreedPhotoGridInterfaces'

interface HomeContextType {
  breedsList: BreedObject[]
}

export const HomeContext = createContext({} as HomeContextType)
