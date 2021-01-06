import { Story, Meta } from '@storybook/react/types-6-0'
import CardList, { CardListProps } from '.'

export default {
  title: 'Profile/CardList',
  component: CardList,
  args: {
    cards: [
      {
        flag: 'visa',
        img: './img/visa.png',
        number: '**** **** **** 1234'
      },
      {
        flag: 'mastercard',
        img: './img/master-card.png',
        number: '**** **** **** 2345'
      }
    ]
  }
} as Meta

export const Default: Story<CardListProps> = (args) => <CardList {...args} />
