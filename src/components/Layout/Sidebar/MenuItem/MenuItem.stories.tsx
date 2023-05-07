import { MenuItem } from "./MenuItem";

import type { Meta, StoryObj } from "@storybook/react";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MenuItem> = {
  title: "Components/Layout/Sidebar/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
