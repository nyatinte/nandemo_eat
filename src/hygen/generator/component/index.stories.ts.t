---
to: src/<%= directory %>/<%= name %>/<%= name %>.stories.tsx
unless_exists: true
---
import type { Meta, StoryObj } from '@storybook/react';

import { <%= name %> } from './<%= name %>';

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

export const Primary: Story = {
  args: {
    primary: true,
    label: '<%= name %>',
  },
};
