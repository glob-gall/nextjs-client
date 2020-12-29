import { RenderWithTheme } from 'utils/test/helpers'

import { Divider } from '.'

describe('<Divider />', () => {
  it('should render properly', () => {
    const { container } = RenderWithTheme(<Divider />)

    expect(container.firstChild).toMatchInlineSnapshot()
  })
})
