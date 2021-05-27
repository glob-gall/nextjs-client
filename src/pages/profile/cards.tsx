import CardList, { CardListProps } from 'components/CardList'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'
import mockCards from '__mocks__/cards_mock'

export default function ProfileCards({ cards }: CardListProps) {
  return (
    <Profile>
      <CardList cards={cards} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: {
      cards: mockCards,
      session
    }
  }
}
