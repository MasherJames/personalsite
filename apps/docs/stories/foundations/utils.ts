const colorNames = ['primary', 'secondary', 'accent'];

export const colorsMap = colorNames.map((name) => ({
    title: `theme.color.${name}`,
    colors: [
        `var(--dark-${name})`,
        `var(--${name})`,
        `var(--light-${name})`,
        `var(--on-${name})`,
    ],
}));
