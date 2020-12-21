import { render, screen } from '@testing-library/react'
import { RenderwithTheme } from '../../utils/test/helpers'
import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the heading', () => {
    RenderwithTheme(<FormSignIn />)
  })
})
