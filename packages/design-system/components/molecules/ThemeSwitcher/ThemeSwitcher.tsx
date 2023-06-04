import * as React from 'react';
import { useState, useEffect, useInsertionEffect } from 'react';

import { Svg } from 'components';

interface ThemeSwitcherProps {
    sunColor?: string;
    moonColor?: string;
    className?: string;
    style?: React.CSSProperties;
}

const themeStorageKey = 'theme';

const ThemeSwitcher = ({
    sunColor = 'secondary',
    moonColor = 'accent1',
    className,
    style,
    ...otherProps
}: ThemeSwitcherProps) => {
    useInsertionEffect(() => {
        import('./styles.scss');
    }, []);

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const getColorPreference = () => {
            const themeFromLocalStorage = localStorage.getItem(themeStorageKey);
            if (themeFromLocalStorage) {
                return themeFromLocalStorage;
            } else {
                return window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light';
            }
        };
        setTheme(getColorPreference());
    }, []);

    useEffect(() => {
        const { firstElementChild } = document;

        if (firstElementChild) {
            firstElementChild.setAttribute('class', theme);
        }
    }, [theme]);

    useEffect(() => {
        const handleSystemPreferenceChange = ({
            matches: isDark,
        }: MediaQueryListEvent) => {
            const systemPreferedTheme = isDark ? 'dark' : 'light';
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
        const currentTheme = theme === 'light' ? 'dark' : 'light';
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
                targets={['light']}
                sprite="/test.svg"
                strokeWidth="2px"
                color={sunColor}
            />
            <Svg
                className={`dark  ${theme === 'dark' ? 'active' : ''}`}
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                targets={['dark']}
                sprite="/test.svg"
                strokeWidth="2px"
                color={moonColor}
            />
        </button>
    );
};

export default ThemeSwitcher;
