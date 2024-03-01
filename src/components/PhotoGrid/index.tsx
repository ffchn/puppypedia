import { PhotoGridItemWraper, PhotoGridWrapper } from './styles'

interface PhotoGridItemProps {
  src: string
}

function PhotoGridItem({ src }: PhotoGridItemProps) {
  return (
    <PhotoGridItemWraper>
      <img src={src} alt="" />
    </PhotoGridItemWraper>
  )
}

export default function PhotoGrid() {
  return (
    <PhotoGridWrapper>
      <PhotoGridItem src="https://images.dog.ceo/breeds/bulldog-french/n02108915_4500.jpg" />
      <PhotoGridItem src="https://images.dog.ceo/breeds/bulldog-french/n02108915_4500.jpg" />
      <PhotoGridItem src="https://images.dog.ceo/breeds/bulldog-french/n02108915_4500.jpg" />
      <PhotoGridItem src="https://images.dog.ceo/breeds/bulldog-french/n02108915_4500.jpg" />
      <PhotoGridItem src="https://images.dog.ceo/breeds/bulldog-french/n02108915_4500.jpg" />
      <PhotoGridItem src="https://images.dog.ceo/breeds/bulldog-french/n02108915_4500.jpg" />
      <PhotoGridItem src="https://images.dog.ceo/breeds/bulldog-french/n02108915_4500.jpg" />
      <PhotoGridItem src="https://images.dog.ceo/breeds/bulldog-french/n02108915_4500.jpg" />
      <PhotoGridItem src="https://images.dog.ceo/breeds/bulldog-french/n02108915_4500.jpg" />
    </PhotoGridWrapper>
  )
}
