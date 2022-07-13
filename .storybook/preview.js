import React from 'react'
import GlobalStyleComponent from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyleComponent />
      <Story />
    </>
  )
]
