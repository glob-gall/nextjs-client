import WishList, { WishlistTemplateProps } from 'templates/WishList'

function WishListPage(props: WishlistTemplateProps) {
  return <WishList {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      // games: [
      //   {
      //     title: 'Population Zero',
      //     developer: 'Rockstar Games',
      //     img: 'https://source.unsplash.com/user/willianjusten/300x140',
      //     price: 'R$ 235,00',
      //     promotionalPrice: 'R$ 215,00'
      //   },
      //   {
      //     title: 'Population Zero',
      //     developer: 'Rockstar Games',
      //     img: 'https://source.unsplash.com/user/willianjusten/300x141',
      //     price: 'R$ 235,00',
      //     promotionalPrice: 'R$ 215,00'
      //   },
      //   {
      //     title: 'Population Zero',
      //     developer: 'Rockstar Games',
      //     img: 'https://source.unsplash.com/user/willianjusten/300x142',
      //     price: 'R$ 235,00',
      //     promotionalPrice: 'R$ 215,00'
      //   }
      // ],
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
      }
    }
  }
}

export default WishListPage
