// import { useRouter } from 'next/router'
import Game, { GameProps } from 'templates/Game'
export default function Index(props: GameProps) {
  // const router = useRouter()

  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'a' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      galleryProps: {
        items: [
          {
            src: 'https://source.unsplash.com/user/willianjusten/1042x580',
            label: 'label 1'
          },
          {
            src: 'https://source.unsplash.com/user/willianjusten/1080x580',
            label: 'label 2'
          },
          {
            src: 'https://source.unsplash.com/user/willianjusten/520x580',
            label: 'label 3'
          },
          {
            src: 'https://source.unsplash.com/user/willianjusten/1042x520',
            label: 'label 4'
          },
          {
            src: 'https://source.unsplash.com/user/willianjusten/520x520',
            label: 'label 5'
          }
        ]
      },
      gameDetailsProps: {
        developer: 'Developer',
        genres: ['Action', 'Adventure'],
        platforms: ['windows', 'mac'],
        publisher: 'Develover Publisher',
        rating: 'BR16',
        releaseDate: '2020-11-21T23:00:00'
      },
      gameInfoProps: {
        description:
          'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.',
        name: 'Borderlands 3',
        price: 'R$ 215,00'
      },
      cover: 'https://source.unsplash.com/user/willianjusten/1080x580',
      description:
        'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.',
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
      upcomingHighlights: {
        title: 'Read Dead it’s back',
        subtitle: 'Come see John’s new adventures',
        buttonLabel: 'Buy now',
        buttonLink: '/rdr2',
        backgroundImage: '/img/Background.png',
        floatImg: '/img/Image.png'
      },
      upcomingGames: [
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
    }
  }
}
