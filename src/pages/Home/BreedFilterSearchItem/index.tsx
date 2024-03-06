import { Plus } from 'phosphor-react'
import { MouseEvent } from 'react'
import {
  BreedFilterItemWrapper,
  SubbreedFilterItemWrapper,
  SubbreedItemListWrapper,
} from './styles'
import { BreedFilterItemProps } from '../../../interfaces/BreedFiltersInterfaces'

export function BreedFilterSearchItem({
  breedData,
  onClick,
}: BreedFilterItemProps) {
  function handleFilterItemCallback(
    e: MouseEvent<HTMLSpanElement>,
    subbreed?: string,
  ) {
    e.stopPropagation()
    onClick(
      // prepares object with parent breed for subreed search
      subbreed
        ? { breed: subbreed, parentBreed: breedData.breed, subbreeds: [] }
        : breedData,
    )
  }

  return (
    <BreedFilterItemWrapper
      onClick={(e) => handleFilterItemCallback(e)}
      subbreeds={breedData.subbreeds.length >= 1}
    >
      <div className="mainBreedWrapper">
        <span className="breed">{breedData.breed}</span>
        <Plus size={16} weight="bold" />
      </div>
      {breedData.subbreeds.length >= 1 && (
        <SubbreedItemListWrapper>
          {breedData.subbreeds.map((breed, index) => (
            <SubbreedFilterItemWrapper
              // disabling this as we dont have unique IDs for objects
              // eslint-disable-next-line react/no-array-index-key
              key={breed + index}
              onClick={(e) => handleFilterItemCallback(e, breed)}
            >
              <span className="breed">{breed}</span>
              <Plus size={16} weight="bold" />
            </SubbreedFilterItemWrapper>
          ))}
        </SubbreedItemListWrapper>
      )}
    </BreedFilterItemWrapper>
  )
}
