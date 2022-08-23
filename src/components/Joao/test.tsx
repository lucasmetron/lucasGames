import React from 'react'
import { render, screen } from '@testing-library/react'

import Joao from '.'

describe('<Joao />', () => {
  it('should render the heading', () => {
    const { container } = render(<Joao />)

    expect(screen.getByRole('heading', { name: /Joao/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
