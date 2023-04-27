import type { Meta, StoryObj } from "@storybook/react";

import { MenuToggle } from "./MenuToggle";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MenuToggle> = {
  title: "Components/Layout/Sidebar/MenuToggle",
  component: MenuToggle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuToggle>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
