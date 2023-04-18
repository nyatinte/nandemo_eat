---
to: src/<%= directory %>/<%= name %>/<%= name %>.stories.tsx
unless_exists: true
---
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { <%= name %> } from './<%= name %>'

const meta: ComponentMeta<typeof <%= name %>> = {
  title: 'Components/<%= name %>',
  component: <%= name %>,
}
export default meta

const Template: ComponentStory<typeof <%= name %>> = (args) => <<%= name %> {...args} />

export const Default = Template.bind({})
Default.args = {}
