import type { Meta, StoryObj } from '@storybook/react';

import CardOportunity from './card-oportunity';
import Experiencia from '../../../../../public/images/Experiencia.png'

const meta = {
  title: 'Atoms/CardImageText',
  component: CardOportunity,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardOportunity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    src: Experiencia,
    alt: "Buena Experiencia",
    text: "Gestión de Casa Club con atención en cada detalle, dando experiencias excepcionales para nuestros inversionistas.",
  }
};