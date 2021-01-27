import { Category } from '@styled-icons/material-outlined'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Game, { GameProps } from 'templates/Game'
import { initializeApollo } from 'utils/apollo'

const apolloClient = initializeApollo()

export default function Index(props: GameProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({ params: { slug } }))

  return {
    paths: paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

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
        developer: game.developers[0].name,
        genres: game.categories.map((category) => category.name),
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        releaseDate: game.release_date
      },
      gameInfoProps: {
        description: game.short_description,
        name: game.name,
        price: game.price
      },
      cover: 'https://source.unsplash.com/user/willianjusten/1080x580',
      description: game.description,
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
