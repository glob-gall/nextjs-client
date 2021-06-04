import Container from 'components/Container'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import { Divider } from 'components/Divider'

import CartList, { CartListProps } from 'components/CartList'
import { gameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Empty from 'components/Empty'
import { useCart } from 'hooks/use-cart'

export type CartProps = {
  recommendedGames: gameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})
  const { items } = useCart()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          My cart
        </Heading>

        <S.Content>
          {items ? (
            <CartList items={items} total={total} />
          ) : (
            <Empty
              title="You have no games here"
              description="Go to store and find the best games to buy"
            />
          )}
          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </S.Content>

        <Divider />
      </Container>

      <Showcase
        title="You may like this games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
