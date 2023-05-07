import { SubCategoryCreatableSelect } from "./SubCategoryCreatableSelect";

import type { Meta, StoryObj } from "@storybook/react";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SubCategoryCreatableSelect> = {
  title: "Components/SubCategoryCreatableSelect",
  component: SubCategoryCreatableSelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SubCategoryCreatableSelect>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
