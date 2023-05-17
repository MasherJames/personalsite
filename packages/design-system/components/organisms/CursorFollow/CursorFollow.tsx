import * as React from 'react';
import { useState, useRef, useInsertionEffect } from 'react';

interface CursorFollowProps {
  children: React.ReactNode;
  cursor?: string;
  style?: React.CSSProperties;
  className?: string;
  maximumTransformValue: number;
}

const CursorFollow = ({
  children,
  cursor = 'pointer',
  style,
  className,
  maximumTransformValue = 1.5,
}: CursorFollowProps) => {
  useInsertionEffect(() => {
    import('./styles.scss');
  }, []);

  console.log('first');

  const targetMidPointsRef = useRef({ x: 0, y: 0 });
  const transformRateOfChangePerUnit = useRef({ x: 0, y: 0 });
  const [transformValues, setTransformValues] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const { height, width } = target.getBoundingClientRect();

    const xMidPoint = width / 2;
    const yMidPoint = height / 2;

    targetMidPointsRef.current.x = xMidPoint;
    targetMidPointsRef.current.y = yMidPoint;

    const xTransformRateOfChangePerUnit = (maximumTransformValue * 2) / width;
    const yTransformRateOfChangePerUnit = (maximumTransformValue * 2) / height;

    transformRateOfChangePerUnit.current.x = xTransformRateOfChangePerUnit;
    transformRateOfChangePerUnit.current.y = yTransformRateOfChangePerUnit;
  };

  console.log('James');

  const handleMouseMove = (e: React.MouseEvent) => {
    const { offsetX, offsetY } = e.nativeEvent;

    const xTranformValue =
      (offsetX - targetMidPointsRef.current.x) *
      transformRateOfChangePerUnit.current.x;

    const yTranformValue =
      (offsetY - targetMidPointsRef.current.y) *
      transformRateOfChangePerUnit.current.y;

    setTransformValues({ x: xTranformValue, y: yTranformValue });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setTransformValues({ x: 0, y: 0 });
  };

  return (
    <div
      className={['cursorfollow', className].filter(Boolean).join(' ')}
      style={
        {
          '--cursor': cursor,
          '--xtransform': `${transformValues.x}rem`,
          '--ytransform': `${transformValues.y}rem`,
          ...(style ? style : {}),
        } as React.CSSProperties
      }
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default CursorFollow;
