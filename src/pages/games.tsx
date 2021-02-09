import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries/games'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import { initializeApollo } from 'utils/apollo'
import ExploreSideBarMock from '__mocks__/ExploreSideBar'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 12 }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      sideBarProps: { items: ExploreSideBarMock }
    }
  }
}
