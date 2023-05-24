import { DishCreateForm } from "./DishCreateForm";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DishCreateForm> = {
  title: "Components/DishCreateForm",
  component: DishCreateForm,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DishCreateForm>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "DishCreateForm",
  },
};
