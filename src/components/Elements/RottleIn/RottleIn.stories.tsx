import { RottleIn } from "./RottleIn";

import type { Meta, StoryObj } from "@storybook/react";

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
        <Story>hogehoge</Story>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RottleIn>;

export const Default: Story = {
  args: {},
};
