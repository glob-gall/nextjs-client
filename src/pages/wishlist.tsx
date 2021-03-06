import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import {
  QueryWishlist,
  QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'
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
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  if (!session) return {}
  await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session.user?.email as string
    }
  })

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      games: GameCardsMock,
      recommendedGamesTtitle: recommended?.section?.title,
      recommendedGames: gamesMapper(recommended?.section?.games),
      recommendedHighlight: highlightMapper(recommended?.section?.highlight),
      session
    }
  }
}

export default WishListPage
