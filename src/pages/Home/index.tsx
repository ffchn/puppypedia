import BreedFilterMenu from '../../components/BreedFilterMenu'
import PhotoGrid from '../../components/PhotoGrid'
import { HomeWrapper } from './styles'

export default function Home() {
  return (
    <HomeWrapper>
      <BreedFilterMenu />
      <PhotoGrid />
    </HomeWrapper>
  )
}
