import * as React from 'react';
import { useState, useEffect, useRef, useInsertionEffect } from 'react';

interface DraggableElementProps {
    children: React.ReactNode;
    className?: string;
    shouldRebound?: boolean;
    shouldBounceOnRebound?: boolean;
    style?: React.CSSProperties;
}

const DraggableElement = ({
    style,
    children,
    className,
    shouldRebound,
    shouldBounceOnRebound,
}: DraggableElementProps) => {
    useInsertionEffect(() => {
        import('./styles.scss');
    }, []);

    const [shouldDrag, setShouldDrag] = useState(false);
    const [shouldAnimateOnRebound, setShouldAnimateOnRebound] = useState(false);
    const [position, setPosition] = useState({ left: 0, top: 0 });
    const offsetRef = useRef({ offsetX: 0, offsetY: 0 });
    const intialPositionRef = useRef({ left: 0, top: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!shouldDrag) return;

            setPosition({
                left: e.clientX - offsetRef.current.offsetX,
                top: e.clientY - offsetRef.current.offsetY,
            });
        };

        const handleMouseUp = () => {
            setShouldDrag(false);

            if (shouldRebound) {
                setPosition({
                    left: intialPositionRef.current.left,
                    top: intialPositionRef.current.top,
                });
                setShouldAnimateOnRebound(true);
            }
        };

        if (shouldDrag) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [shouldDrag, shouldRebound]);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setShouldDrag(true);

        if (shouldRebound) {
            setShouldAnimateOnRebound(false);
        }

        const { offsetX, offsetY } = e.nativeEvent;

        offsetRef.current.offsetX = offsetX;
        offsetRef.current.offsetY = offsetY;

        const target = e.target as HTMLDivElement;

        intialPositionRef.current.left = target.offsetLeft;
        intialPositionRef.current.top = target.offsetTop;
    };

    return (
        <div
            className={[
                'draggableelement',
                shouldAnimateOnRebound && 'transition',
                shouldAnimateOnRebound && shouldBounceOnRebound && 'bounce',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
            style={
                {
                    '--top': `${position.top}px`,
                    '--left': `${position.left}px`,
                    '--cursor': shouldDrag ? 'grabbing' : 'grab',
                    ...(style ? style : {}),
                } as React.CSSProperties
            }
            onMouseDown={handleMouseDown}
        >
            {children}
        </div>
    );
};

export default DraggableElement;
