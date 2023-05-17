import type { Meta, StoryObj } from '@storybook/react';

import { CursorFollow } from 'components';

const meta: Meta<typeof CursorFollow> = {
  title: 'Organisms/CursorFollow',
  component: CursorFollow,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CursorFollow>;

export const Base: Story = {
  args: {
    children: (
      <div
        style={{
          background: 'var(--secondary)',
          color: 'var(--light-primary)',
          padding: 'calc(var(--s-1) * 1rem)',
        }}
      >
        Hover on me!
      </div>
    ),
    style: {
      width: 'max-content',
    },
  },
};
