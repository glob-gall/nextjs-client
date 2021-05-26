import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'

export const BannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    img: `http://localhost:1337${banner.image?.url}`,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }))
}

export const gamesMapper = (games: QueryGames_games[] | null | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover
          ? `http://localhost:1337${game.cover.url}`
          : 'https://source.unsplash.com/user/willianjusten/300x140',
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight: QueryHome_sections_freeGames_highlight | null | undefined
) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      backgroundImage: `http://localhost:1337${highlight.background?.url}`,
      floatImg: `http://localhost:1337${highlight.floatImage?.url}`,
      alignment: highlight.alignment
    }
  )
}
