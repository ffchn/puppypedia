import { Dog } from 'phosphor-react'
import { NavWrapper } from './styles'

export default function Header() {
  return (
    <header>
      <NavWrapper>
        <Dog size={36} />
        <span className="logo">
          puppy<b>pedia</b>
        </span>
      </NavWrapper>
    </header>
  )
}
