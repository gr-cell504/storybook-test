import type { Meta, StoryObj } from '@storybook/web-components-vite';


import { html } from 'lit';

const CustomButton = () => html`<button style="background-color: blue; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">`;;

const meta = {
  title: 'Card/UserListCard',
  render: () => CustomButton(),
} satisfies Meta;

export default meta;


export const myStory = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/7OPvNxuoixxe5sW8fFFibt/Storybook-%EC%97%B0%EB%8F%99?node-id=3389-46020&t=RVrMzFrF9vJMC62q-4",
    },
  },
};