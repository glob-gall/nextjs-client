import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('medium')`
      font-size:${theme.font.sizes.medium};
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    `}

    span {
      color: ${theme.colors.primary};
    }
  `}
`
