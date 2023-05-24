import { type Size } from "@/types/Size";

import { LoadingSpinner } from "./LoadingSpinner";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoadingSpinner> = {
  title: "Components/LoadingSpinner",
  component: LoadingSpinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"] satisfies Size[],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {};
