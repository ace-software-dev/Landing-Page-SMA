import type { Meta, StoryObj } from '@storybook/react';
import CircleNumber from './circle-number';


const meta = {
  title: 'Atoms/CircleNumber',
  component: CircleNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CircleNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    classes: '',
    children: '1',
  },
};
