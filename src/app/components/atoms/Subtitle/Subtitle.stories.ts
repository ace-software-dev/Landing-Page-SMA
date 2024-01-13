import type { Meta, StoryObj } from '@storybook/react';

import Subtitle from './subtitle';

const meta = {
  title: 'Atoms/Subtitle',
  component: Subtitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Subtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    children: 'Hello',
  },
};

export const Italics: Story = {
  args: {
    children: 'Hello',
    classes: 'italic',
  },
};

export const Small: Story = {
  args: {
    children: 'Hello',
    size: 'text-xl',
  },
};