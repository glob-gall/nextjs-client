import Heading from 'components/Heading'
import { CreditCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardListProps = {
  cards?: CreditCard[]
}

const CardList = ({ cards }: CardListProps) => (
  <S.Wrapper>
    <Heading size="small" lineBottom color="black" lineColor="primary">
      My cards
    </Heading>

    {cards?.map(({ flag, img, number }) => (
      <S.Card key={number}>
        <img src={img} alt={flag} />
        <span>{number}</span>
      </S.Card>
    ))}
  </S.Wrapper>
)

export default CardList
