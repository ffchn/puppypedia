import axios from 'axios'

const dogApiBaseURL = process.env.REACT_APP_DOG_API_BASEURL

const api = axios.create({
  baseURL: dogApiBaseURL,
})

export const DogAPI = {
  async getAllBreeds() {
    try {
      const response = await api.get('list/all')
      if (!response.data) throw new Error('Could not fetch breeds list')
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
