import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'design-system/components';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};

// Btns
