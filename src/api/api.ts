import axios from 'axios'

const dogApiBaseURL = process.env.REACT_APP_DOG_API_BASEURL

const api = axios.create({
  baseURL: dogApiBaseURL,
})

export const DogAPI = {
  async getAllBreeds(): Promise<Object | null> {
    try {
      const response = await api.get('list/all')
      if (!response.data) throw new Error('Could not fetch breeds list')
      const { status, message } = response.data
      if (status === 'success') {
        return message
      }

      return null
    } catch (err) {
      if (err instanceof Error)
        console.error(`Error fetching breeds list: ${err.message}`)
      return null
    }
  },

  async fetchBreedImageList(breed: string): Promise<Array<string>> {
    try {
      const response = await api.get(`${breed}/images/random/5`)
      if (!response.data) throw new Error('Could not fetch breed image list')
      const { message, status } = response.data
      if (status === 'success') {
        return message
      }

      return []
    } catch (err) {
      if (err instanceof Error)
        console.error(`Error fetching breeds list: ${err.message}`)
      return []
    }
  },
}
