import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { BannerMapper, gamesMapper, highlightMapper } from '.'

describe('bannerMapper()', () => {
  it('should reutrn the right format when mapped', () => {
    const banner = {
      image: {
        url: '/image.jpg'
      },
      title: 'Banner title',
      subtitle: 'Banner subtitle',
      button: {
        label: 'label',
        link: 'link'
      },
      ribbon: {
        text: 'ribbon',
        color: 'primary',
        size: 'small'
      }
    } as QueryHome_banners

    expect(BannerMapper([banner])).toStrictEqual([
      {
        img: 'http://localhost:1337/image.jpg',
        title: 'Banner title',
        subtitle: 'Banner subtitle',
        buttonLabel: 'label',
        buttonLink: 'link',
        ribbon: 'ribbon',
        ribbonColor: 'primary',
        ribbonSize: 'small'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no game', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })
  it('should return the correct format when mapped', () => {
    const game = {
      id: '1',
      name: 'name',
      cover: {
        url: 'img.jpg'
      },
      developers: [
        {
          name: 'developer'
        }
      ],
      slug: 'name-slug',
      price: 10
    } as QueryGames_games

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'gane',
        slug: 'game-slug',
        developer: 'developer',
        img: 'http://localhost:1337/img.jpg',
        price: 10
      }
    ])
  })
})

describe('highlightMapper', () => {
  it('shold return the correct format when mapped', () => {
    const highlight = {
      title: 'title',
      subtitle: 'subtitle',
      background: {
        url: 'background.jpg'
      },
      floatImage: {
        url: 'float.jpg'
      },
      buttonLabel: 'label',
      buttonLink: 'link',
      aligment: 'right'
    } as QueryHome_sections_freeGames_highlight

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'title',
      subtitle: 'subtitle',
      buttonLabel: 'label',
      buttonLink: 'link',
      backgroundImage: 'http://localhost:1337/background.jpg',
      floatImg: 'http://localhost:1337/float.jpg',
      alignment: 'right'
    })
  })
})
