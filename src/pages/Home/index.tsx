import { useEffect, useMemo, useState } from 'react'
import BreedFilterMenu from './BreedFilterMenu'
import PhotoGrid from './PhotoGrid'
import { HomeWrapper } from './styles'
import { DogAPI } from '../../api/api'
import {
  BreedObject,
  BreedPhotoItemObject,
} from '../../interfaces/BreedPhotoGridInterfaces'
import { HomeContext } from './HomeContext'

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

  const memoizedContextValues = useMemo(() => {
    // memoized states so it doesnt re-render whole context when not necessary
    return { breedsList }
  }, [breedsList])

  return (
    <HomeWrapper>
      <HomeContext.Provider value={memoizedContextValues}>
        <BreedFilterMenu />
        <PhotoGrid
          isFetching={isFetching}
          breedsPhotoList={selectedBreedsPhotoList}
        />
      </HomeContext.Provider>
    </HomeWrapper>
  )
}
