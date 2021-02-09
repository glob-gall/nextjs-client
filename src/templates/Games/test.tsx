import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { RenderWithTheme } from 'utils/test/helpers'
import filterItemsMock from '__mocks__/ExploreSideBar'

import Games from '.'
import { QUERY_GAMES } from 'graphql/queries/games'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

jest.mock('components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

const sideBarProps = {
  items: filterItemsMock,
  onFilter: jest.fn
}

describe('<Games />', () => {
  it('should render sections', () => {
    RenderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: { limit: 15 }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'RimWorld',
                    slug: 'rimworld',
                    cover: {
                      url: '/uploads/rimworld_8e93acc963.jpg'
                    },
                    developers: [{ name: 'Ludeon Studios' }],
                    price: 65.99,
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        addTypename={false}
      >
        <Games sideBarProps={sideBarProps} />
      </MockedProvider>
    )

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
