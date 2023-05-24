import { Footer } from "./Footer";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Footer",
  },
};
