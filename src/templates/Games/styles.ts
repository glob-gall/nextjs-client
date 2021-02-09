import styled, { css, keyframes } from 'styled-components'
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

const svgLoop = keyframes`
  0%{
    top: 10rem;
    width: 5rem;
  }
  50%{
    top: 8rem;
    width: 8rem;
  }
  100%{
    top: 10rem;
    width: 5rem;
  }
`

export const Loading = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    height: 35rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    p {
      font-weight: ${theme.font.bold};/
    }
    svg {
      position: absolute;

      animation: ${svgLoop};
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  `}
`
