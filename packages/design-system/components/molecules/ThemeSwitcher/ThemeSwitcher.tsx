import * as React from 'react';
import { useState, useEffect, useInsertionEffect } from 'react';

import { Svg } from '../../atoms';

export interface ThemeSwitcherProps {
    sunColor?: string;
    moonColor?: string;
    className?: string;
    style?: React.CSSProperties;
    sprite: string;
    darkTarget?: string;
    lightTarget?: string;
}

const themeStorageKey = 'theme';

enum ThemeOptions {
    LIGHT = 'light',
    DARK = 'dark',
}

const ThemeSwitcher = ({
    sunColor = 'secondary',
    moonColor = 'accent1',
    className,
    sprite,
    darkTarget = 'dark',
    lightTarget = 'light',
    style,
    ...otherProps
}: ThemeSwitcherProps) => {
    useInsertionEffect(() => {
        import('./styles.scss');
    }, []);

    const [theme, setTheme] = useState(ThemeOptions.LIGHT);

    useEffect(() => {
        const getColorPreference = () => {
            const themeFromLocalStorage = localStorage.getItem(
                themeStorageKey,
            ) as ThemeOptions;
            if (themeFromLocalStorage) {
                return themeFromLocalStorage;
            } else {
                return window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? ThemeOptions.DARK
                    : ThemeOptions.LIGHT;
            }
        };
        setTheme(getColorPreference());
    }, []);

    useEffect(() => {
        const { firstElementChild } = document;

        const oldTheme =
            theme === ThemeOptions.LIGHT
                ? ThemeOptions.DARK
                : ThemeOptions.LIGHT;

        if (firstElementChild?.classList.contains(oldTheme)) {
            firstElementChild.classList.remove(oldTheme);
            firstElementChild.classList.add(theme);
        } else {
            firstElementChild?.classList.add(theme);
        }
    }, [theme]);

    useEffect(() => {
        const handleSystemPreferenceChange = ({
            matches: isDark,
        }: MediaQueryListEvent) => {
            const systemPreferedTheme = isDark
                ? ThemeOptions.DARK
                : ThemeOptions.LIGHT;

            localStorage.setItem(themeStorageKey, systemPreferedTheme);
            setTheme(systemPreferedTheme);
        };

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', handleSystemPreferenceChange);

        return () => {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', handleSystemPreferenceChange);
        };
    }, []);

    const handleThemeChange = () => {
        const currentTheme =
            theme === ThemeOptions.LIGHT
                ? ThemeOptions.DARK
                : ThemeOptions.LIGHT;
        localStorage.setItem(themeStorageKey, currentTheme);
        setTheme(currentTheme);
    };

    return (
        <button
            className={['themeswitcher', className].filter(Boolean).join(' ')}
            onClick={handleThemeChange}
            style={style}
            {...otherProps}
        >
            <Svg
                className={`light  ${theme === 'light' ? 'active' : ''}`}
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                targets={[lightTarget]}
                sprite={sprite}
                strokeWidth="2px"
                color={sunColor}
            />
            <Svg
                className={`dark  ${theme === 'dark' ? 'active' : ''}`}
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                targets={[darkTarget]}
                sprite={sprite}
                strokeWidth="2px"
                color={moonColor}
            />
        </button>
    );
};

export default ThemeSwitcher;
