import { XmarkIcon } from "./XmarkIcon";

import type { Meta, StoryObj } from "@storybook/react";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof XmarkIcon> = {
  title: "Components/XmarkIcon",
  component: XmarkIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof XmarkIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
