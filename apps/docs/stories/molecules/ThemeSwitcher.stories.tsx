import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from 'design-system/components';

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

const ThemeSwitcherTemplate = ({ theme }: { theme: string }) => {
    return (
        <div
            style={{
                height: '100vh',
                backgroundColor:
                    theme === 'light' ? 'white' : 'var(--primary-800)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <ThemeSwitcher sprite="/theme-selector.svg" />
        </div>
    );
};

export const Light: Story = {
    render: () => <ThemeSwitcherTemplate theme="light" />,
    args: {},
};

export const Dark: Story = {
    render: () => <ThemeSwitcherTemplate theme="dark" />,
    args: {},
};
