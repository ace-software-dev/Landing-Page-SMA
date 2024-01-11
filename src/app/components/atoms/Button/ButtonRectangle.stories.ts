import type { Meta, StoryObj } from '@storybook/react';


import RectangleButton from './button-rectangle';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/RectangleButton',
  component: RectangleButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RectangleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Active: Story = {
  args: {
    active: true,
    disabled: false,
    children: 'Hello',
  },
};
export const Inactive: Story = {
  args: {
    active: false,
    disabled: false,
    children: 'Hello',
  },
};
export const Enabled: Story = {
  args: {
    active: true,
    disabled: false,
    children: 'Hello',
  },
};

export const Disabled: Story = {
  args: {
    active: true,
    disabled: true,
    children: 'Hello',
  },
};
