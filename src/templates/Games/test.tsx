import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'
import gamesMock from '__mocks__/GameCardsMock'
import filterItemsMock from '__mocks__/ExploreSideBar'

import Games from '.'

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
      <Games sideBarProps={sideBarProps} games={[gamesMock[0]]} />
    )

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
