import { useState } from 'react'
import { PhotoGridItemWraper, PhotoGridWrapper, PhotoItemModal } from './styles'
import { BreedPhotoItemObject } from '../../../interfaces/BreedPhotoGridInterfaces'
import Modal from '../../../components/Modal'

interface PhotoGridProps {
  breedsPhotoList: Array<BreedPhotoItemObject>
}

interface PhotoGridItemProps {
  photoUrl: string
  onClick: () => void
}

function PhotoGridItem({ photoUrl, onClick }: PhotoGridItemProps) {
  return <PhotoGridItemWraper src={photoUrl} onClick={() => onClick()} />
}

export default function PhotoGrid({ breedsPhotoList }: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  function handleToggleModal(selected: string | null) {
    setSelectedPhoto(selected)
  }
  return (
    <>
      <PhotoGridWrapper>
        {breedsPhotoList.map((item: BreedPhotoItemObject, index) => (
          <PhotoGridItem
            photoUrl={item.photoUrl}
            // disabling following rule as we dont have unique IDs for now
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => handleToggleModal(item.photoUrl)}
          />
        ))}
      </PhotoGridWrapper>
      <Modal
        isOpen={!!selectedPhoto}
        closeModalCallback={() => handleToggleModal(null)}
      >
        <PhotoItemModal>
          <img src={selectedPhoto || ''} alt="" />
        </PhotoItemModal>
      </Modal>
    </>
  )
}
