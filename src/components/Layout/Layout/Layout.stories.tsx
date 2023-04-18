import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Layout } from './Layout'

const meta: ComponentMeta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
}
export default meta

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {}
