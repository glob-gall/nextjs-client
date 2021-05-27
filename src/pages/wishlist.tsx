import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { GetServerSidePropsContext } from 'next'
import WishList, { WishlistTemplateProps } from 'templates/WishList'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'
import GameCardsMock from '__mocks__/GameCardsMock'

function WishListPage(props: WishlistTemplateProps) {
  return <WishList {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()
  const session = await protectedRoutes(context)
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
      recommendedHighlight: highlightMapper(recommended?.section?.highlight),
      session
    }
  }
}

export default WishListPage
