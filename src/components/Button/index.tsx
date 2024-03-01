import { type ButtonHTMLAttributes } from 'react'
import { ButtonWrapper } from './styles'

export type ButtonVariants = 'default' | 'outlined'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  disabled?: boolean
}

export function Button(props: ButtonProps) {
  return <ButtonWrapper {...props} />
}

Button.defaultProps = {
  variant: 'default',
  disabled: false,
}
