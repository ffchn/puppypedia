import { useEffect, useMemo, useState } from 'react'
import { Dog, PawPrint } from 'phosphor-react'
import BreedFilterMenu from './BreedFilterMenu'
import PhotoGrid from './PhotoGrid'
import { EmptyStateWrapper, HomeWrapper } from './styles'
import { DogAPI } from '../../api/api'
import {
  BreedObject,
  BreedPhotoItemObject,
} from '../../interfaces/BreedPhotoGridInterfaces'
import { HomeContext } from './HomeContext'

export default function Home() {
  const [breedsList, setBreedsList] = useState<BreedObject[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [breedFilterList, setBreedFilterList] = useState<string[]>([
    'corgi',
    'shiba',
    'labrador',
  ])
  const [selectedBreedsPhotoList, setSelectedBreedsPhotoList] = useState<
    BreedPhotoItemObject[]
  >([])

  async function fetchBreedsListData() {
    setIsFetching(true)
    const breeds = await DogAPI.getAllBreeds()
    setBreedsList(breeds)
    setIsFetching(false)
  }

  useEffect(() => {
    fetchBreedsListData()
  }, [])

  useEffect(() => {
    if (!breedsList && !breedFilterList.length) return

    async function fetchBreedsImageList() {
      const imageList = await DogAPI.fetchBreedListImages(breedFilterList)
      setSelectedBreedsPhotoList(imageList)
    }

    fetchBreedsImageList()
  }, [breedsList, breedFilterList])

  const memoizedContextValues = useMemo(() => {
    function updateBreedsFilter(breedFilter: string[]) {
      setBreedFilterList(breedFilter)
    }

    // memoized states so it doesnt re-render whole context when not necessary
    return { breedsList, breedFilterList, updateBreedsFilter }
  }, [breedsList, breedFilterList])

  return (
    <HomeWrapper>
      <HomeContext.Provider value={memoizedContextValues}>
        <BreedFilterMenu />
        {!isFetching && breedFilterList.length >= 1 ? (
          <PhotoGrid breedsPhotoList={selectedBreedsPhotoList} />
        ) : (
          <EmptyStateWrapper>
            <div className="emptyStateIcon">
              {isFetching ? (
                <PawPrint size={128} className="breathing" />
              ) : (
                <Dog size={128} />
              )}
            </div>

            <div className="emptyStateMessage">
              {isFetching ? (
                <span>Fetch!-ing</span>
              ) : (
                <span>
                  <i>oof! </i>
                  <br />
                  <br />
                  No results found. Try updating the filters!
                </span>
              )}
            </div>
          </EmptyStateWrapper>
        )}
      </HomeContext.Provider>
    </HomeWrapper>
  )
}
