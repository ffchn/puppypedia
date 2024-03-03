import { useEffect, useState } from 'react'
import BreedFilterMenu from './BreedFilterMenu'
import PhotoGrid from './PhotoGrid'
import { HomeWrapper } from './styles'
import { DogAPI } from '../../api/api'
import {
  BreedObject,
  BreedPhotoItemObject,
} from '../../interfaces/BreedPhotoGridInterfaces'

export default function Home() {
  const [breedsList, setBreedsList] = useState<BreedObject[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [selectedBreedsPhotoList, setSelectedBreedsPhotoList] = useState<
    BreedPhotoItemObject[]
  >([])

  async function fetchBreedsListData() {
    setIsFetching(true)
    const breeds = await DogAPI.getAllBreeds()
    setBreedsList(breeds)
    setIsFetching(false)
  }

  async function fetchBreedsImageList() {
    const imageList = await DogAPI.fetchBreedListImages([
      'corgi',
      'hound',
      'poodle',
    ])
    setSelectedBreedsPhotoList(imageList)
  }

  useEffect(() => {
    fetchBreedsListData()
  }, [])

  useEffect(() => {
    if (!breedsList) return
    setSelectedBreedsPhotoList([]) // todo: clear this up

    fetchBreedsImageList()
  }, [breedsList])

  return (
    <HomeWrapper>
      <BreedFilterMenu />
      <PhotoGrid
        isFetching={isFetching}
        breedsPhotoList={selectedBreedsPhotoList}
      />
    </HomeWrapper>
  )
}
