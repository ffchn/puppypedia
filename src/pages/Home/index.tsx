import { useEffect, useMemo, useState } from 'react'
import { Dog, PawPrint } from 'phosphor-react'
import { useQuery } from '@tanstack/react-query'
import BreedFilterMenu from './BreedFilterMenu'
import PhotoGrid from './PhotoGrid'
import { EmptyStateWrapper, HomeWrapper } from './styles'
import { DogAPI } from '../../api/api'
import {
  BreedObject,
  BreedPhotoItemObject,
} from '../../interfaces/BreedPhotoGridInterfaces'
import { HomeContext } from './HomeContext'
import { queryClient } from '../../api/queryClient'

export default function Home() {
  const [breedsList, setBreedsList] = useState<BreedObject[]>([])
  const [breedFilterList, setBreedFilterList] = useState<BreedObject[]>([
    { breed: 'bulldog', subbreeds: ['bullterrier'] },
    { breed: 'pug', subbreeds: [] },
    { breed: 'corgi', subbreeds: [] },
  ])
  const [selectedBreedsPhotoList, setSelectedBreedsPhotoList] = useState<
    BreedPhotoItemObject[]
  >([])

  useEffect(() => {
    if (!breedFilterList.length) return

    async function fetchBreedsImageList() {
      try {
        const data = await queryClient.fetchQuery({
          queryKey: ['breedFilterList', breedFilterList],
          queryFn: () => DogAPI.fetchBreedListImages(breedFilterList),
        })

        setSelectedBreedsPhotoList(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchBreedsImageList()
  }, [breedFilterList])

  const { data, isPending, error } = useQuery({
    queryKey: ['breedsData'],
    queryFn: async (): Promise<BreedObject[]> => DogAPI.getAllBreeds(),
  })

  useEffect(() => {
    if (data) setBreedsList(data)
  }, [data])

  const memoizedContextValues = useMemo(() => {
    function updateBreedsFilter(breedFilter: BreedObject[]) {
      setBreedFilterList(breedFilter)
    }

    // memoized states so it doesnt re-render whole context when not necessary
    return { breedsList, breedFilterList, updateBreedsFilter }
  }, [breedsList, breedFilterList])

  return (
    <HomeWrapper>
      <HomeContext.Provider value={memoizedContextValues}>
        <BreedFilterMenu />
        {!isPending && <h1>{}</h1>}
        {!isPending && !error && breedFilterList.length >= 1 ? (
          <PhotoGrid breedsPhotoList={selectedBreedsPhotoList} />
        ) : (
          <EmptyStateWrapper>
            <div className="emptyStateIcon">
              {isPending ? (
                <PawPrint size={128} className="breathing" />
              ) : (
                <Dog size={128} />
              )}
            </div>

            <div className="emptyStateMessage">
              {isPending ? (
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
