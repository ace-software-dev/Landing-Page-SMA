import type { Meta, StoryObj } from '@storybook/react';

import ContactInformation from './contact-information';

const meta = {
  title: 'Molecules/ContactInformation',
  component: ContactInformation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
};