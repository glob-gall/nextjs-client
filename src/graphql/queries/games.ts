import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(limit: $limit) {
      ...GameFragment
    }
  }
  ${GameFragment}
`

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(where: { slug: $slug }) {
      name
      price
      short_description
      description
      rating
      release_date
      gallery {
        rsc: url
        label: alternativeText
      }
      cover {
        src: url
      }
      developers {
        name
      }
      publisher {
        name
      }
      categories {
        name
      }
      platforms {
        name
      }
    }
  }
`
