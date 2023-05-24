import { FaTwitter } from "react-icons/fa";

import { LinkWithIcon } from "./LinkWithIcon";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkWithIcon> = {
  title: "Components/LinkWithIcon",
  component: LinkWithIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LinkWithIcon>;

export const Primary: Story = {
  args: {
    href: "",
    label: "LinkWithIcon",
    icon: <FaTwitter />,
  },
};
