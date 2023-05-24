import { MenuItem } from "./MenuItem";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MenuItem> = {
  title: "Components/Layout/Sidebar/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Primary: Story = {};
