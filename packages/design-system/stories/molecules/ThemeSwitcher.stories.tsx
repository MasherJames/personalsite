import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from 'components';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'Molecules/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {
    render: () => {
        return (
            <div
                style={{
                    height: '100vh',
                    backgroundColor: 'var(--primary-800)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ThemeSwitcher />
            </div>
        );
    },
    args: {},
};
