import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { html } from 'lit'

interface ButtonProps {
  backgroundColor: string
}

function CustomButton({ backgroundColor }: ButtonProps) {
  return html`
    <button style="background-color: ${backgroundColor}; color: white; padding: 12px 16px; border: 1px solid black; border-radius: 4px; cursor: pointer;">
        button
    </button>`
}

const meta = {
  title: 'Design/Button',
  render: args => CustomButton(args),
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

export const Red: Story = {
  args: {
    backgroundColor: 'red',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/7OPvNxuoixxe5sW8fFFibt/Storybook-%EC%97%B0%EB%8F%99?node-id=3389-46020&t=RVrMzFrF9vJMC62q-4',
    },
  },
}

export const Blue: Story = {
  args: {
    backgroundColor: 'blue',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/7OPvNxuoixxe5sW8fFFibt/Storybook-%EC%97%B0%EB%8F%99?node-id=3389-46020&t=RVrMzFrF9vJMC62q-4',
    },
  },
}
