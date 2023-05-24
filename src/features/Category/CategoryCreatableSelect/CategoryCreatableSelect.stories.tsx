import { CategoryCreatableSelect } from "./CategoryCreatableSelect";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CategoryCreatableSelect> = {
  title: "Components/CategoryCreatableSelect",
  component: CategoryCreatableSelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CategoryCreatableSelect>;

export const Default: Story = {};
