import { RenderWithTheme } from 'utils/test/helpers'

import { Grid } from '.'

describe('<Grid />', () => {
  it('should render the heading', () => {
    const { container } = RenderWithTheme(<Grid />)

    expect(container.firstChild).toMatchInlineSnapshot()
  })
})
