import React from 'react'
import { render, screen } from '@testing-library/react'

import Bia from '.'

describe('<Bia />', () => {
  it('should render the heading', () => {
    const { container } = render(<Bia />)

    expect(screen.getByRole('heading', { name: /Bia/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
