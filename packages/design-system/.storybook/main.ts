import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
        '@storybook/addon-styling',
    ],
    // Trigger
    staticDirs: [
        '../assets',
        '../node_modules/assets/icons',
        '../node_modules/assets/fonts',
        '../node_modules/assets/images',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
