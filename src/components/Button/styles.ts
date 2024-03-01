import styled, { css } from 'styled-components'
import { ButtonProps } from './index'

export const ButtonWrapper = styled.button<ButtonProps>`
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid transparent;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;

  transition: 0.5s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    background-color: ${({ theme }) => theme['gray-600']};
  }

  ${({ variant, theme }) =>
    variant === 'default' &&
    css`
      background: ${theme.colors['orange-500']};
      color: ${theme.colors['gray-100']};

      &:not(:disabled):hover {
        background: ${theme.colors['orange-300']};
      }
    `};

  ${({ variant, theme }) =>
    variant === 'outlined' &&
    css`
      background: transparent;
      border: 2px solid ${theme.colors['orange-500']};
      color: ${theme.colors['orange-500']};

      &:not(:disabled):hover {
        color: white;
        background: ${theme.colors['orange-300']};
        border-color: ${theme.colors['orange-300']};
      }
    `};
`
