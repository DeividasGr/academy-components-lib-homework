import React from "react";

import { Pill } from "../../src";

export default {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          "default (no prop value is needed)",
          "green",
          "yellow",
          "redish",
        ],
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (props) => <Pill {...props} />;

export const Default = Template.bind({});
Default.args = {
  children: "No color set",
};

export const Green = Template.bind({});
Green.args = {
  children: "Green Pill",
  color: "green",
};

export const Yellow = Template.bind({});
Yellow.args = {
  children: "Yellow Pill",
  color: "yellow",
};

export const Redish = Template.bind({});
Redish.args = {
  children: "Redish Pill",
  color: "redish",
};
