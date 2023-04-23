import type { Meta, StoryObj } from "@storybook/react";

import { IngredientCreatableSelect } from "./IngredientCreatableSelect";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof IngredientCreatableSelect> = {
  title: "Components/IngredientCreatableSelect",
  component: IngredientCreatableSelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IngredientCreatableSelect>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
