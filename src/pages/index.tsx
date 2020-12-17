import { GetStaticProps } from 'next'
import Home, { HomeTemplateProps } from '../templates/Home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// getStaticProps
// getServerSideProps - (old getInitialProps)

export const getStaticProps = () => {
  const banners = [
    {
      img: 'https://source.unsplash.com/user/willianjusten/1042x580',
      title: 'Defy death 1',
      subtitle: '<p>Play the new <strong>CrashLands</strong> season',
      buttonLabel: 'Buy now',
      buttonLink: '/games/defy-death',
      ribbon: 'Bestselling'
    },
    {
      img: 'https://source.unsplash.com/user/willianjusten/1042x582',
      title: 'Defy death 2',
      subtitle: '<p>Play the new <strong>CrashLands</strong> season',
      buttonLabel: 'Buy now',
      buttonLink: '/games/defy-death'
    },
    {
      img: 'https://source.unsplash.com/user/willianjusten/1042x581',
      title: 'Defy death 3',
      subtitle: '<p>Play the new <strong>CrashLands</strong> season',
      buttonLabel: 'Buy now',
      buttonLink: '/games/defy-death'
    }
  ]

  const games = [
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
  ]

  const highlight = {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: './img/Background.png',
    floatImg: './img/Image.png'
  }

  return {
    props: {
      banners,
      newGames: games,
      freeGames: games,
      upcommingGames: games,
      mostPopularGames: games,
      upcommingMoreGames: games,
      freeHighligth: highlight,
      upcommingHighligth: highlight,
      mostPopularHighlight: highlight
    },
    revalidate: false
  }
}
