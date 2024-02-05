import type { Meta, StoryObj } from '@storybook/react';
import TimelineItem from './timeline-item';

const meta: Meta<typeof TimelineItem> = {
  title: 'Molecules/TimelineItem',
  component: TimelineItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TimelineItem>;

export const Default: Story = {
  args: {
    date: '2023',
    description: 'Comienzo del proyecto',
  },
};

export const Reverse: Story = {
  args: {
    date: '2023',
    description: 'Comienzo del proyecto',
    reverse: true,
  },
};
