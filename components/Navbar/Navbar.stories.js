import { storiesOf } from '@storybook/vue'
import Navbar from './Navbar'

storiesOf('Navbar', module)
  .add('normal', () => ({
    components: { Navbar },
    template:
    `
      <Navbar
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  }))