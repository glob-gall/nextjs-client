import { initializeApollo } from 'utils/apollo'
import Home, { HomeTemplateProps } from '../templates/Home'

export default function Index(props: HomeTemplateProps) {
  // if (loading) return <p>loading...</p>
  // if (error) return <p>ERROR: {JSON.stringify(error, null, 2)}</p>
  // if (data) return <p>{JSON.stringify(data, null, 2)}</p>

  return <Home {...props} />
}

// getStaticProps
// getServerSideProps - (old getInitialProps)

export const getStaticProps = async () => {
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
