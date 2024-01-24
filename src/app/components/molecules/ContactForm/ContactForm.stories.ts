import type { Meta, StoryObj } from '@storybook/react';

import ContactForm from './contact-form';

const meta = {
  title: 'Molecules/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
};