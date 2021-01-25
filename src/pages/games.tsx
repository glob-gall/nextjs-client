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
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      sideBarProps: { items: ExploreSideBarMock },
      games: data.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0]?.name || 'not informed',
        img:
          game.cover ||
          'https://source.unsplash.com/user/willianjusten/300x140',
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game.price)
      }))
    }
  }
}
