import { Add, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import { useState } from 'react'
import * as S from './styles'

export type CreditCard = {
  number: string
  flag: string
  img: string
}

export type PaymentOptionsProps = {
  cards: CreditCard[]
  handlePayment: () => void
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <S.Wrapper>
      <Heading lineColor="primary" size="small" lineBottom>
        Payment Option
      </Heading>

      <S.CardsList>
        {cards?.map((card) => (
          <S.CardItem key={card.number}>
            <div>
              <img src={card.img} alt={card.flag} />
              {card.number}
            </div>
            <Radio
              name="credit-card"
              id={card.number}
              value={card.number}
              onCheck={() => {
                setChecked(true)
              }}
            />
          </S.CardItem>
        ))}
        <S.AddNewCard role="button">
          <Add size={20} />
          Add a new credit card
        </S.AddNewCard>
      </S.CardsList>

      <S.ButtonSection>
        <Button size="small" minimal fullWidth>
          Continue Shopping
        </Button>
        <Button
          size="small"
          icon={<ShoppingCart />}
          fullWidth
          onClick={() => handlePayment()}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.ButtonSection>
    </S.Wrapper>
  )
}

export default PaymentOptions
