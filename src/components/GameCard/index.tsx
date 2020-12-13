import * as S from './styles'
import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart
} from '@styled-icons/material-outlined'

import Button from '../Button'
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon'

export type gameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const GameCard = ({
  img,
  title,
  developer,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary',
  onFav
}: gameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <FavoriteBorder aria-label="Add to Wishlist" />
        ) : (
          <Favorite aria-label="Remove from Wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
