import type { Meta, StoryObj } from '@storybook/react';

import Glamping from '../../../../../public/images/glamping_plano.png';

import ImageCard from './image-card';

const meta = {
  title: 'Cards/ImageCard',
  component: ImageCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    src: "/images/glamping_plano.png",
    classes: '',
  },
};


