import type { Meta, StoryObj } from '@storybook/react';

import SectionSubtitle from './section-subtitle';

const meta = {
  title: 'Atoms/Section-Subtitle',
  component: SectionSubtitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionSubtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    children: 'San Miguel de Allende se posiciona entre los cinco destinos de mayor crecimiento en 2023, con un aumento del 400% en reservas.',
  },
};

export const Italics: Story = {
  args: {
    children: 'San Miguel de Allende se posiciona entre los cinco destinos de mayor crecimiento en 2023, con un aumento del 400% en reservas.',
    classes: 'italic',
  },
};

export const Small: Story = {
  args: {
    children: 'San Miguel de Allende se posiciona entre los cinco destinos de mayor crecimiento en 2023, con un aumento del 400% en reservas.',
    size: 'text-base',
  },
};
