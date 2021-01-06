import CardList, { CardListProps } from 'components/CardList'
import Profile from 'templates/Profile'
import mockCards from '__mocks__/cards_mock'

export default function ProfileCards({ cards }: CardListProps) {
  return (
    <Profile>
      <CardList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}
