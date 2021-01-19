import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import Container from 'components/Container'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`

    display: grid;
    grid-template-columns: 26rem 1fr;
    gap: ${theme.grid.gutter};
    `}
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.medium};
    cursor: pointer;
    padding: ${theme.spacings.medium};

    text-align: center;

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`