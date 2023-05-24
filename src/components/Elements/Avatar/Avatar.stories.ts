import { Avatar } from "./Avatar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const src =
  "https://images.unsplash.com/photo-1681502014934-b70a5ff05bef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
export const Default: Story = {
  args: {
    src: src,
  },
};

export const NoImage: Story = {
  args: {
    src: undefined,
  },
};
export const LoadingFailed: Story = {
  args: {
    src: "hoge",
  },
};
