import axios from 'axios'
import { BreedPhotoItemObject } from '../interfaces/BreedPhotoGridInterfaces'

const dogApiBaseURL = process.env.REACT_APP_DOG_API_BASEURL

const api = axios.create({
  baseURL: dogApiBaseURL,
})

export const DogAPI = {
  async getAllBreeds(): Promise<Object | null> {
    try {
      const response = await api.get('/breeds/list/all')
      if (!response.data) throw new Error('Could not fetch breeds list')
      const { status, message } = response.data
      if (status === 'success') return message

      return null
    } catch (err) {
      if (err instanceof Error)
        console.error(`Error fetching breeds list: ${err.message}`)
      return null
    }
  },

  async fetchBreedImageList(
    breed: string,
  ): Promise<Array<BreedPhotoItemObject>> {
    try {
      const response = await api.get(`/breed/${breed}/images/random/5`)
      if (!response.data) throw new Error('Could not fetch breed image list')
      const { message, status } = response.data
      if (status === 'success') {
        // creates array with objects with breed and photo url so its possible to separate them in the grid
        return message.map((photoUrl: string) => ({ breed, photoUrl }))
      }

      return []
    } catch (err) {
      if (err instanceof Error)
        console.error(`Error fetching breeds list: ${err.message}`)
      return []
    }
  },

  async fetchBreedListImages(breeds: string[]) {
    try {
      const promiseList = await Promise.all(
        breeds.map((breed) => this.fetchBreedImageList(breed)),
      )

      return promiseList.flat() // todo separate breeds
    } catch (err) {
      if (err instanceof Error)
        console.error(`Error fetching breeds list: ${err.message}`)
      return []
    }
  },
}
