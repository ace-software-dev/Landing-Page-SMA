import type { Meta, StoryObj } from '@storybook/react';

import SectionTitle from './section-title';


const meta = {
  title: 'Atoms/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    title: 'Proyectos que nos respaldan',
    subtitle: '20 años de experiencia colaborando en la gestión y dirección de proyectos inmobiliarios.',
  },
};

