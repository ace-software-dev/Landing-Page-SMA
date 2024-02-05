import type { Meta, StoryObj } from '@storybook/react';
import TabsGallery from './TabsGallery';


const meta = {
  title: 'Atoms/TabsGallery',
  component: TabsGallery,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabsGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    image1: 'https://picsum.photos/200/300',
    image2: 'https://picsum.photos/300/300',
    image3: 'https://picsum.photos/400/300',
  },
};

