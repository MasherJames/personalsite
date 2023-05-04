import * as React from "react";

export interface IUseProps {
  target: string;
  sprite: string;
  strokeWidth?: string;
  useClassName?: string;
}

const Use = ({ target, sprite, strokeWidth, useClassName }: IUseProps) => {
  let extraProps = {};
  if (strokeWidth) {
    extraProps = { ...extraProps, strokeWidth };
  }
  return (
    <use
      className={[useClassName].filter(Boolean).join(" ")}
      href={`${sprite}#${target}`}
      {...extraProps}
    />
  );
};

export default Use;
