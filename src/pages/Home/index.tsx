import { useEffect, useState } from 'react'
import BreedFilterMenu from '../../components/BreedFilterMenu'
import PhotoGrid from '../../components/PhotoGrid'
import { HomeWrapper } from './styles'
import { DogAPI } from '../../api/api'
import { BreedPhotoItemObject } from '../../interfaces/BreedPhotoGridInterfaces'

export default function Home() {
  const [breedsList, setBreedsList] = useState<Object | null>(null)
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
      <BreedFilterMenu breedsList={breedsList} />
      <PhotoGrid
        isFetching={isFetching}
        breedsPhotoList={selectedBreedsPhotoList}
      />
    </HomeWrapper>
  )
}
