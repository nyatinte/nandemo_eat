---
to: src/<%= directory %>/<%= name %>/<%= name %>.stories.tsx
unless_exists: true
---
import type { Meta, StoryObj } from '@storybook/react';

import { <%= name %> } from './<%= name %>';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof <%= name %>> = {
  title: 'Components/<%= name %>',
  component: <%= name %>,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof <%= name %>>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: '<%= name %>',
  },
};
