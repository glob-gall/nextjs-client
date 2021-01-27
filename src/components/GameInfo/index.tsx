import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import { formatPrice } from 'utils/formatPrice'
import * as S from './styles'

export type gameInfoProps = {
  name: string
  description: string
  price: number
}

const GameInfo = ({ name, description, price }: gameInfoProps) => (
  <S.Wrapper>
    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
    <Heading lineBottom color="black" lineColor="primary">
      {name}
    </Heading>
    <S.Description>{description}</S.Description>

    <S.ButtonWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} minimal size="large">
        Wishlist
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
