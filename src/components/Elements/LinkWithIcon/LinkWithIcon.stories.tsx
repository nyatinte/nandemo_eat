import { FaTwitter } from "react-icons/fa";

import { LinkWithIcon } from "./LinkWithIcon";

import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LinkWithIcon> = {
  title: "Components/LinkWithIcon",
  component: LinkWithIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LinkWithIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    href: "",
    label: "LinkWithIcon",
    icon: <FaTwitter />,
  },
};
