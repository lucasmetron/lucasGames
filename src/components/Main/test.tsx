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

    expect(container.firstChild).toMatchSnapshot() // cria snapshot e depois fica comprando se o container bate com o snapshot
  })

  it('should render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
