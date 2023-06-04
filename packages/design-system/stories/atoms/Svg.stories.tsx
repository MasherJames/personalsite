import type { Meta, StoryObj } from '@storybook/react';

import { Svg } from 'components';

const meta: Meta<typeof Svg> = {
    title: 'Atoms/Svg',
    component: Svg,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Svg>;

export const Base: Story = {
    args: {
        width: '276px',
        height: '252px',
        viewBox: '0 0 276 252',
        targets: ['avatar'],
        sprite: '/avatar-sprite.svg',
        strokeWidth: '2px',
        color: 'secondary',
    },
};

export const ThemeingIcons: Story = {
    args: {
        width: '40px',
        height: '40px',
        viewBox: '0 0 24 24',
        targets: ['light'],
        sprite: '/test.svg',
        strokeWidth: '2px',
        color: 'secondary',
    },
};
