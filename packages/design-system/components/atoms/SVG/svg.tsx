import * as React from "react";

import { Use, IUseProps } from "./common";

interface SVGProps extends Omit<IUseProps, "target"> {
  width: string;
  height: string;
  viewBox: string;
  preserveAspectRatio?: string;
  className?: string;
  targets?: string[];
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Svg = ({
  width,
  height,
  viewBox,
  targets,
  sprite,
  strokeWidth,
  className,
  useClassName,
  preserveAspectRatio = "xMidYMid meet",
  style,
  children,
  ...otherProps
}: SVGProps) => {
  return (
    <svg
      className={[className].filter(Boolean).join(" ")}
      width={width}
      height={height}
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...otherProps}
    >
      {targets?.map((target) => (
        <Use
          key={target}
          target={target}
          sprite={sprite}
          strokeWidth={strokeWidth}
          useClassName={useClassName}
        />
      ))}
      {children}
    </svg>
  );
};

export default Svg;
