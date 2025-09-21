import type { Meta, StoryObj } from '@storybook/web-components-vite';

import * as HeaderStories from './Header.stories';
import type { PageProps } from './Page';
import { Page } from './Page';

const meta = {
  title: 'Card/UserListCard',
  render: (args: PageProps) => Page(args),
} satisfies Meta<PageProps>;

export default meta;
type Story = StoryObj<PageProps>;

export const LoggedIn: Story = {
  args: {
    // More on composing args: https://storybook.js.org/docs/writing-stories/args#args-composition
    ...HeaderStories.LoggedIn.args,
  },
};

export const myStory = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/7OPvNxuoixxe5sW8fFFibt/Storybook-%EC%97%B0%EB%8F%99?node-id=3387-45024&t=OlsvomDKvLaan0zd-4",
    },
  },
};