import React from 'react'
import Main from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main
  // se for passado essa prop, todos os story desse arquivo vao com esses args
  // args: {
  //   title: 'default',
  //   description: 'teste'
  // }
} as Meta

// podemos passar assim direto, pq como o comp ja tem essas props definidas, ele ja pega defautl
export const Basic: Story = (args) => <Main {...args} />

// ou podemos definir manual
export const Basic2: Story = (args) => <Main {...args} />
Basic2.args = {
  title: 'Lucas',
  description: 'rosa'
}
