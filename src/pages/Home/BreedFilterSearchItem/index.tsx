import { Plus, X } from 'phosphor-react'
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
  type,
}: BreedFilterItemProps) {
  function handleFilterItemCallback(
    e: MouseEvent<HTMLSpanElement>,
    subbreed?: string,
  ) {
    e.stopPropagation()
    onClick(
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
        {type === 'add' ? (
          <Plus size={16} weight="bold" />
        ) : (
          <X size={16} weight="bold" />
        )}
      </div>
      {breedData.subbreeds.length >= 1 && (
        <SubbreedItemListWrapper>
          {breedData.subbreeds.map((breed) => (
            <SubbreedFilterItemWrapper
              onClick={(e) => handleFilterItemCallback(e, breed)}
            >
              <span className="breed">{breed}</span>
              {type === 'add' ? (
                <Plus size={16} weight="bold" />
              ) : (
                <X size={16} weight="bold" />
              )}
            </SubbreedFilterItemWrapper>
          ))}
        </SubbreedItemListWrapper>
      )}
    </BreedFilterItemWrapper>
  )
}
