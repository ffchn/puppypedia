import { useEffect, useState } from 'react'
import BreedFilterMenu from '../../components/BreedFilterMenu'
import PhotoGrid from '../../components/PhotoGrid'
import { HomeWrapper } from './styles'
import { DogAPI } from '../../api/api'

export default function Home() {
  const [breedsList, setBreedsList] = useState<Object | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [selectedBreedsPhotoList, setSelectedBreedsPhotoList] = useState<
    string[]
  >([])

  async function fetchBreedsListData() {
    setIsFetching(true)
    const breeds = await DogAPI.getAllBreeds()
    // console.log(breeds)

    setBreedsList(breeds)
    setIsFetching(false)
  }

  // function handleUpdatePhotoList(photoList: Array<string>) {
  //   setSelectedBreedsPhotoList(photoList)
  // }

  async function fetchBreedsImageList() {
    // const imageList = await DogAPI.fetchBreedImageList('corgi')
    // setSelectedBreedsPhotoList(imageList)
    // console.log('imagelist', imageList)
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
