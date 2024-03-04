import axios from 'axios'
import {
  BreedObject,
  BreedPhotoItemObject,
} from '../interfaces/BreedPhotoGridInterfaces'

const dogApiBaseURL = process.env.REACT_APP_DOG_API_BASEURL

const api = axios.create({
  baseURL: dogApiBaseURL,
})

export const DogAPI = {
  async getAllBreeds(): Promise<Array<BreedObject>> {
    try {
      const response = await api.get('/breeds/list/all')
      if (!response.data) throw new Error('Could not fetch breeds list')
      const { status, message } = response.data
      if (status === 'success') {
        const breedList: BreedObject[] = Object.keys(message).map(
          (breed, index) => ({
            breed,
            key: `${breed}-${index}`,
            subbreeds: message[breed],
          }),
        )

        return breedList
      }

      return []
    } catch (err) {
      if (err instanceof Error)
        console.error(`Error fetching breeds list: ${err.message}`)
      return []
    }
  },

  async fetchBreedImageList(
    breed: string,
    parentBreed?: string,
  ): Promise<Array<BreedPhotoItemObject>> {
    try {
      const breedUrl = parentBreed ? `${parentBreed}/${breed}` : breed // prepares url for subbreed fetching
      const response = await api.get(`/breed/${breedUrl}/images/random/5`)
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

  async fetchBreedListImages(filters: BreedObject[]) {
    try {
      const promiseList = await Promise.all(
        filters.map((filter) =>
          this.fetchBreedImageList(filter.breed, filter.parentBreed),
        ),
      )

      return promiseList.flat()
    } catch (err) {
      if (err instanceof Error)
        console.error(`Error fetching breeds list: ${err.message}`)
      return []
    }
  },
}
