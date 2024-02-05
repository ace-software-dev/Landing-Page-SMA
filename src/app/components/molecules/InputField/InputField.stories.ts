import type { Meta, StoryObj } from '@storybook/react';

import InputField from './input-field';
import { ChangeEvent } from 'react';

const meta = {
  title: 'Molecules/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'green-bg',
      values: [
        {
          name: 'green-bg',
          value: '#EDEEE9',
        },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    type: 'text',
    value: "Test value",
    name: "name",
    onChange: (e: ChangeEvent<HTMLInputElement>) => {},
  }
};

export const WithLabel: Story = {
  args: {
    ...Regular.args,
    label: "Name",
    placeholder: "John Doe"
  }
};

export const Placeholder: Story = {
  args: {
    ...Regular.args,
    value: "",
    label: "Name",
    placeholder: "John Doe"
  }
};

export const Disabled: Story = {
  args: {
    ...Regular.args,
    label: "Name",
    placeholder: "John Doe",
    disabled: true,
  }
};