import styled, { css } from 'styled-components'
import * as HeadingStyle from 'components/Heading/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    background: ${theme.colors.white};

    ${HeadingStyle.Wrapper} {
      margin: ${theme.spacings.xsmall};
    }
  `}
`

export const CardsList = styled.div`
  margin-top: auto;
`

export const CardItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
    }
    img {
      margin-right: ${theme.spacings.xxsmall};
    }

    background: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall};
    margin: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`

export const AddNewCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      margin-right: ${theme.spacings.xsmall};
    }

    background: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall};
    margin: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`

export const ButtonSection = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall};
  `}
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
