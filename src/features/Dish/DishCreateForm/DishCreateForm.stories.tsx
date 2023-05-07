import { DishCreateForm } from "./DishCreateForm";

import type { Meta, StoryObj } from "@storybook/react";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
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

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "DishCreateForm",
  },
};
