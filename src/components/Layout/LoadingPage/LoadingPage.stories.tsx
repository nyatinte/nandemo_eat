import { LoadingPage } from "./LoadingPage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoadingPage> = {
  title: "Components/LoadingPage",
  component: LoadingPage,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingPage>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "LoadingPage",
  },
};
