import { Download } from '@styled-icons/boxicons-solid'
import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  id: string
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  img,
  price,
  title,
  downloadLink,
  paymentInfo
}: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.Download
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              <Download size={22} />
            </S.Download>
          )}
        </S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>

    {!!paymentInfo && (
      <S.PaymentContent>
        <div>{paymentInfo.purchaseDate}</div>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <img src={paymentInfo.img} alt={paymentInfo.flag} />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
)

export default GameItem
