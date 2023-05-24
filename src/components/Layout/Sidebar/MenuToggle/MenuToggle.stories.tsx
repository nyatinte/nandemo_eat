import { MenuToggle } from "./MenuToggle";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MenuToggle> = {
  title: "Components/Layout/Sidebar/MenuToggle",
  component: MenuToggle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuToggle>;

export const Primary: Story = {};
