import React from "react";

import { Divider } from "../../src";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    isFancy: { control: "boolean" },
    isShort: { control: "boolean" },
    className: { control: "text" },
  },
};

const Template = (props) => <Divider {...props} />;

export const Default = Template.bind({});

export const Fancy = Template.bind({});
Fancy.args = { isFancy: true };

export const Short = Template.bind({});
Short.args = { isShort: true };

export const FancyAndShort = Template.bind({});
FancyAndShort.args = { isShort: true, isFancy: true };
