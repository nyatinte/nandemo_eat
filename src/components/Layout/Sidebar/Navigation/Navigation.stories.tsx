import { Navigation } from "./Navigation";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Navigation> = {
  title: "Components/Layout/Sidebar/Navigation",
  component: Navigation,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {};
