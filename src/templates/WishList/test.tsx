import { render, screen } from '@testing-library/react'

import WishList from '.'

const props = {
  recommendedGames: [
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x145',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    }
  ],
  recommendedHighlight: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/img/Background.png',
    floatImg: '/img/Image.png'
  }
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Showcase Mock">Showcase Mock</div>
  }
}))

describe('<WishList />', () => {
  it('should render all components', () => {
    render(<WishList {...props} />)

    expect(screen.getByRole('heading', { name: /wish list/i }))
    expect(screen.getByTestId('showcase mock')).toBeInTheDocument()
  })
})
