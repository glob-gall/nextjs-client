import Cart, { CartProps } from 'templates/Cart'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export function getServerSideProps() {
  const props = {
    items: [
      {
        title: 'Population Zero',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x140',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
      },
      {
        title: 'Population Zero',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x141',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
      }
    ],
    recommendedGames: [
      {
        title: 'Population Zero',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x140',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
      },
      {
        title: 'Population Zero',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x141',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
      },
      {
        title: 'Population Zero',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x142',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
      },
      {
        title: 'Population Zero',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x143',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
      },
      {
        title: 'Population Zero',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x144',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
      },
      {
        title: 'Population Zero',
        developer: 'Rockstar Games',
        img: 'https://source.unsplash.com/user/willianjusten/300x145',
        price: 'R$ 235,00',
        promotionalPrice: 'R$ 215,00'
      }
    ],
    recommendedHighlight: {
      title: 'Read Dead it’s back',
      subtitle: 'Come see John’s new adventures',
      buttonLabel: 'Buy now',
      buttonLink: '/rdr2',
      backgroundImage: '/img/Background.png',
      floatImg: '/img/Image.png'
    },
    total: '440,00',
    cards: [
      {
        flag: 'visa',
        img: '/img/visa.png',
        number: '**** **** **** 1234'
      },
      {
        flag: 'mastercard',
        img: '/img/master-card.png',
        number: '**** **** **** 4321'
      }
    ]
  } as CartProps

  return {
    props
  }
}
