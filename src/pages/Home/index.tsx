import { useEffect, useState } from 'react'
import BreedFilterMenu from '../../components/BreedFilterMenu'
import PhotoGrid from '../../components/PhotoGrid'
import { HomeWrapper } from './styles'
import { DogAPI } from '../../api/api'

export default function Home() {
  const [breedsList, setBreedsList] = useState([])

  async function fetchBreedsListData() {
    const breeds = await DogAPI.getAllBreeds()
    setBreedsList(breeds)
  }

  useEffect(() => {
    fetchBreedsListData()
  }, [])

  return (
    <HomeWrapper>
      <BreedFilterMenu breedsList={breedsList} />
      <PhotoGrid />
    </HomeWrapper>
  )
}
