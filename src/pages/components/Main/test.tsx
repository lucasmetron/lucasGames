import React from 'react'
import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  it('shold render correctly', () => {
    const { container } = render(<Main />)
    console.log('sdsd')

    expect(container.firstChild).toMatchSnapshot()
  })
})
