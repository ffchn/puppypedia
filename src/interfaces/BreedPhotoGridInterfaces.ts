export interface BreedObject {
  breed: string
  parentBreed?: string
  subbreeds: string[]
}

export interface BreedPhotoItemObject {
  photoUrl: string
  breed: string
}
