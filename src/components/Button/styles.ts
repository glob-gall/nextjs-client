import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

//Omit
type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    color: ${theme.colors.white};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.font.family};

    text-decoration: none;
    cursor: pointer;
    border: none;
    border-radius: ${theme.border.radius};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    transition: background-color 0.2s;
    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    padding: ${theme.spacings.xxsmall};
    ${!!size && wrapperModifiers[size!](theme)}

    ${!!fullWidth && wrapperModifiers.fullWidth}

    ${hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`