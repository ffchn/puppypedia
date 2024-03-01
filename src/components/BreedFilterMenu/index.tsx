import { Button } from '../Button'

export default function BreedFilterMenu() {
  return (
    <div>
      <Button type="button">Manage Breeds</Button>
      <Button type="button" variant="outlined">
        Manage Breeds
      </Button>
      <Button type="button" disabled>
        Manage Breeds
      </Button>
      <Button type="button" disabled variant="outlined">
        Manage Breeds
      </Button>
      <span>Corgi</span>
      <span>Corgi</span>
      <span>Corgi</span>
    </div>
  )
}
