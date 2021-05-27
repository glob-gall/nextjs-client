import OrderList, { OrderListProps } from 'components/OrderList'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'
import gameItems from '__mocks__/GameItems'

export default function ProfileCards({ items }: OrderListProps) {
  return (
    <Profile>
      <OrderList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: {
      items: gameItems,
      session
    }
  }
}
