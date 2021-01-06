import OrderList, { OrderListProps } from 'components/OrderList'
import Profile from 'templates/Profile'
import gameItems from '__mocks__/GameItems'

export default function ProfileCards({ items }: OrderListProps) {
  return (
    <Profile>
      <OrderList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: gameItems
    }
  }
}
