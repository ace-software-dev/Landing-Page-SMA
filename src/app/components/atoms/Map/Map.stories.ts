import type { Meta, StoryObj } from '@storybook/react';


import MapAtom from './map';


const meta = {
  title: 'Atoms/Map',
  component: MapAtom,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MapAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
      center: {
        lat: 20.927441183582008,
        lng: -100.7104233679535,
        name: 'Glamping San Miguel'
      },
      places :[]
  },
};

export const SeveralPlaces: Story = {
  args: {
    center: {
      lat: 20.927441183582008,
      lng: -100.7104233679535,
      name: 'Glamping San Miguel'
    },
    places :[{
      lat: 20.913533166035844,
      lng: -100.74378055060164,
      name: 'Parroquia Centro'
    },
    {
      lat: 20.898342336684696,
      lng: -100.72659947263716,
      name: 'Plaza la Luciérnaga'
    },
    {
      lat: 20.93124265594304, 
      lng: -100.6881409531946,
      name: 'Splash Inn San Miguel'
    }]
},
};
