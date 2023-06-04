import * as React from 'react';
import { useState, useInsertionEffect } from 'react';

import { Svg } from 'components';

interface ThemeSwitcherProps {
    sunColor?: string;
    moonColor?: string;
    className?: string;
    style?: React.CSSProperties;
}

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

    const handleThemeChange = () => {
        setTheme(() => (theme === 'light' ? 'dark' : 'light'));
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
