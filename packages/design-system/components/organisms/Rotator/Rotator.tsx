import * as React from 'react';
import { useState, useEffect, useInsertionEffect } from 'react';

export enum RotationScrollTarget {
    Children,
    Parent,
    Rotator,
}

interface RotatorProps {
    children?: React.ReactNode;
    className?: string;
    scrollTarget: React.RefObject<HTMLElement>;
    target?: RotationScrollTarget;
    style?: React.CSSProperties;
    height?: number;
    width?: number;
    Wrapper?: React.ElementType;
    rounded?: boolean;
    color?: string;
}

const Rotator = ({
    style,
    scrollTarget,
    target = RotationScrollTarget.Rotator,
    width,
    height,
    rounded,
    className,
    Wrapper = 'div',
    children,
    color = 'accent',
    ...otherProps
}: RotatorProps) => {
    useInsertionEffect(() => {
        import('./styles.scss');
    }, []);

    const [rotationDeg, setRotationDeg] = useState(0);

    useEffect(() => {
        const currentScrollTarget = scrollTarget.current;
        const handleScroll = () => {
            const { scrollHeight, scrollTop } = scrollTarget?.current || {};
            if (scrollHeight && scrollTop) {
                const rotationDeg = (scrollTop / scrollHeight) * 360;
                setRotationDeg(rotationDeg);
            }
        };
        currentScrollTarget?.addEventListener('scroll', handleScroll);

        return () => {
            currentScrollTarget?.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTarget]);

    return (
        <Wrapper
            className={[
                'rotator',
                rounded && 'rounded',
                target === RotationScrollTarget.Children && 'rotatechildren',
                target === RotationScrollTarget.Parent && 'rotateparent',
                target === RotationScrollTarget.Rotator && 'rotateboth',
                `x-${color}`,
                className,
            ]
                .filter(Boolean)
                .join(' ')}
            style={
                {
                    '--rotation-deg': `${rotationDeg}deg`,
                    '--counter-rotation-deg': `-${rotationDeg}deg`,
                    ...(width ? { '--width': `${width}rem` } : {}),
                    ...(height ? { '--height': `${height}rem` } : {}),
                    ...(style ? style : {}),
                } as React.CSSProperties
            }
            {...otherProps}
        >
            {children}
        </Wrapper>
    );
};

export default Rotator;
