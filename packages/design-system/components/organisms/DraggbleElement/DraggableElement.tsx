import * as React from "react";
import { useState, useEffect, useInsertionEffect } from "react";

interface DraggableElementProps {
  children: React.ReactNode;
  className?: string;
  shouldSnap?: boolean;
  shouldRebound?: boolean;
  style?: React.CSSProperties;
}

const DraggableElement = ({
  style,
  children,
  className,
  shouldSnap,
  shouldRebound,
}: DraggableElementProps) => {
  useInsertionEffect(() => {
    import("./styles.scss");
  }, []);

  const [position, setPosition] = useState<{ left?: number; top?: number }>({});

  const [originalElementPosition, setOriginalElementPosition] = useState<{
    offsetLeft?: number;
    offsetTop?: number;
  }>({});

  const [cusorPosition, setCusorPosition] = useState<{
    clientX?: number;
    clientY?: number;
  }>({});

  const handOnDragStart = (e: React.DragEvent) => {
    const targetElement = e.target as HTMLDivElement;
    const { offsetLeft, offsetTop } = targetElement;

    setOriginalElementPosition({
      offsetLeft: offsetLeft,
      offsetTop: offsetTop,
    });

    setCusorPosition({
      clientX: e.clientX,
      clientY: e.clientY,
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    const xpos = cusorPosition.clientX - e.clientX;
    const ypos = cusorPosition.clientY - e.clientY;
    const targetElement = e.target as HTMLDivElement;
    const { offsetLeft, offsetTop } = targetElement;

    setCusorPosition({
      clientX: xpos,
      clientY: ypos,
    });
    setPosition({
      left: offsetLeft - xpos,
      top: offsetTop - ypos,
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleOnDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (shouldRebound) {
      setPosition({
        left: originalElementPosition.offsetLeft,
        top: originalElementPosition.offsetTop,
      });
    }
  };

  return (
    <div
      className={["draggableelement", className].filter(Boolean).join(" ")}
      style={
        {
          "--left": `${position.left}px`,
          "--top": `${position.top}px`,
          ...(style ? style : {}),
        } as React.CSSProperties
      }
      onDragStart={handOnDragStart}
      onDrag={handleDrag}
      onDragOver={handleDragOver}
      onDragEnd={handleOnDragEnd}
      draggable
    >
      {children}
    </div>
  );
};

export default DraggableElement;
