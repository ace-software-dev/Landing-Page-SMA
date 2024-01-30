import type { Meta, StoryObj } from '@storybook/react';

import SectionText from './section-text';

const meta = {
  title: 'Atoms/SectionText',
  component: SectionText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    children: 'Desarrollo',
    href: '',
  },
};
