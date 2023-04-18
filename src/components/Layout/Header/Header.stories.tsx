import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from './Header'

const meta: ComponentMeta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
}
export default meta

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
