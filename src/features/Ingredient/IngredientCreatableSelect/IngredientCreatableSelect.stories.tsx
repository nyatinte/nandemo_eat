import { IngredientCreatableSelect } from "./IngredientCreatableSelect";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IngredientCreatableSelect> = {
  title: "Components/IngredientCreatableSelect",
  component: IngredientCreatableSelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IngredientCreatableSelect>;

export const Default: Story = {};
