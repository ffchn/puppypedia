import { PawPrint } from 'phosphor-react'
import {
  PhotoGridEmptyStateWrapper,
  PhotoGridItemWraper,
  PhotoGridWrapper,
} from './styles'
import { BreedPhotoItemObject } from '../../../interfaces/BreedPhotoGridInterfaces'

interface PhotoGridProps {
  isFetching: boolean
  breedsPhotoList: Array<BreedPhotoItemObject>
}

interface PhotoGridItemProps {
  photoUrl: string
}

function PhotoGridItem({ photoUrl }: PhotoGridItemProps) {
  return <PhotoGridItemWraper src={photoUrl} />
}

export default function PhotoGrid({
  isFetching,
  breedsPhotoList,
}: PhotoGridProps) {
  return isFetching ? (
    <PhotoGridEmptyStateWrapper>
      <div className="emptyStateIcon">
        <PawPrint size={64} />
      </div>
      <span className="emptyStateMessage">Fetch!-ing</span>
    </PhotoGridEmptyStateWrapper>
  ) : (
    <PhotoGridWrapper>
      {breedsPhotoList.map((item: BreedPhotoItemObject, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <PhotoGridItem photoUrl={item.photoUrl} key={index} />
      ))}
    </PhotoGridWrapper>
  )
}
