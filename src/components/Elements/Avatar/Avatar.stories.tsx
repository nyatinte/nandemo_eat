import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: ComponentMeta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
}
export default meta

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {}
