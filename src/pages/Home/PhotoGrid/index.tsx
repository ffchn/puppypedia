import { PhotoGridItemWraper, PhotoGridWrapper } from './styles'
import { BreedPhotoItemObject } from '../../../interfaces/BreedPhotoGridInterfaces'

interface PhotoGridProps {
  breedsPhotoList: Array<BreedPhotoItemObject>
}

interface PhotoGridItemProps {
  photoUrl: string
}

function PhotoGridItem({ photoUrl }: PhotoGridItemProps) {
  return <PhotoGridItemWraper src={photoUrl} />
}

export default function PhotoGrid({ breedsPhotoList }: PhotoGridProps) {
  return (
    <PhotoGridWrapper>
      {breedsPhotoList.map((item: BreedPhotoItemObject, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <PhotoGridItem photoUrl={item.photoUrl} key={index} />
      ))}
    </PhotoGridWrapper>
  )
}
