import React from 'react'
import Main from '.'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Main',
  component: Main,
  // aqui é importado os knobs
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    // como o Main só recebe props do tipo text, foi importando so o text
    // 1 arg: espera o titulo que vai estar no storybook
    // 2 arg: texto default
    title={text('Title', 'Reac Avançado')}
    description={text('Sub-titulo', 'JavaScipt')}
  />
)
