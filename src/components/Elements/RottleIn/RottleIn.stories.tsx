import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RottleIn } from './RottleIn'

const meta: ComponentMeta<typeof RottleIn> = {
  title: 'Components/RottleIn',
  component: RottleIn,
}
export default meta

const Template: ComponentStory<typeof RottleIn> = (args) => <RottleIn {...args} />

export const Default = Template.bind({})
Default.args = {}
