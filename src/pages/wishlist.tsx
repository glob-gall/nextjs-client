import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import WishList, { WishlistTemplateProps } from 'templates/WishList'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import GameCardsMock from '__mocks__/GameCardsMock'

function WishListPage(props: WishlistTemplateProps) {
  return <WishList {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: GameCardsMock,
      recommendedGamesTtitle: recommended?.section?.title,
      recommendedGames: gamesMapper(recommended?.section?.games),
      recommendedHighlight: highlightMapper(recommended?.section?.highlight)
    }
  }
}

export default WishListPage
