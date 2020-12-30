import { Story, Meta } from '@storybook/react/types-6-0'
import CartList, { CartListProps } from '.'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: [
      {
        img: '/img/Background.png',
        title: 'Red Read Redemption 2',
        price: 'R$ 220,00'
      },
      {
        img: '/img/Background.png',
        title: 'Red Read Redemption 2',
        price: 'R$ 220,00'
      }
    ],
    total: 'R$ 440,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => <CartList {...args} />
