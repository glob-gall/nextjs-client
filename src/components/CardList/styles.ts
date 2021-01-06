import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    & + & {
      margin-top: ${theme.spacings.xxsmall};
    }
    span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
