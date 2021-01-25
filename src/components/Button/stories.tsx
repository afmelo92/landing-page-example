import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    title: 'React Avançado',
    description: 'Typescript, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = () => <Button />
