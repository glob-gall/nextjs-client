import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import Cart, { CartProps } from 'templates/Cart'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import CardsMock from '__mocks__/cards_mock'
export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({ query: QUERY_RECOMMENDED })

  return {
    props: {
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
      total: '440,00',
      cards: CardsMock,
      recommendedGames: gamesMapper(recommended?.section?.games),
      recommendedHighlight: highlightMapper(recommended?.section?.highlight)
    }
  }
}
