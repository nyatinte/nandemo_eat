import type { Meta, StoryObj } from "@storybook/react";
import { RottleIn, type RottleInProps } from "./RottleIn";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RottleIn> = {
  title: "Components/RottleIn",
  component: RottleIn,
  tags: ["autodocs"],
  argTypes: {
    delay: {
      control: {
        type: "number",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center bg-orange-400">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RottleIn>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
