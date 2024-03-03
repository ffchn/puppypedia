import { PawPrint } from 'phosphor-react'
import {
  PhotoGridEmptyStateWrapper,
  PhotoGridItemWraper,
  PhotoGridWrapper,
} from './styles'

interface PhotoGridProps {
  isFetching: boolean
  breedsPhotoList: Array<string>
}

interface PhotoGridItemProps {
  src: string
}

function PhotoGridItem({ src }: PhotoGridItemProps) {
  return <PhotoGridItemWraper src={src} />
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
      {breedsPhotoList.map((item: string) => (
        <PhotoGridItem src={item} />
      ))}
    </PhotoGridWrapper>
  )
}
