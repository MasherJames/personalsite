import * as React from "react";
import { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Rotator, RotationScrollTarget, Svg } from "components";
import Content from "../utils/Content";

const meta: Meta<typeof Rotator> = {
  title: "Organisms/Rotator",
  component: Rotator,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Rotator>;

const ScrollWrapper = ({ ...args }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        height: "800px",
        overflow: "auto",
      }}
      ref={ref}
    >
      <Rotator scrollTarget={ref} {...args} />
      <Content />
    </div>
  );
};

const WithHtmlElementWrapperTemplate = {
  render: ({ ...args }) => {
    return (
      <ScrollWrapper
        {...args}
        Wrapper={({
          style,
          className,
          children,
          ...rest
        }: {
          style: React.CSSProperties;
          className: string;
          children: React.ReactNode;
        }) => {
          return (
            <div
              style={{
                position: "sticky",
                top: 0,
                border: "2px solid var(--dark-accent)",
                padding: ".5rem",
                ...style,
              }}
              className={[className].filter(Boolean).join(" ")}
              {...rest}
            >
              {children}
            </div>
          );
        }}
      >
        <img
          className="childtarget"
          src="/stories/assets/profile.jpeg"
          style={{
            objectFit: "cover",
            borderRadius: "50%",
            width: "100%",
            height: "100%",
          }}
        />
      </ScrollWrapper>
    );
  },
};

const WithImgWrapperTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <ScrollWrapper
        Wrapper={({
          style,
          className,
        }: {
          style: React.CSSProperties;
          className: string;
        }) => {
          return (
            <Svg
              width="200"
              height="200"
              viewBox="0 0 276 252"
              targets={["avatar"]}
              sprite="/stories/assets/avatar-sprite.svg"
              strokeWidth="2px"
              className={[className].filter(Boolean).join(" ")}
              style={{
                position: "sticky",
                top: 0,
                ...style,
              }}
            >
              <foreignObject
                width="200"
                height="200"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  translate: "calc(50% - 100px) calc(50% - 100px)",
                }}
              >
                <img
                  className="childtarget"
                  src="/stories/assets/profile.jpeg"
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </foreignObject>
            </Svg>
          );
        }}
        {...args}
      />
    );
  },
};

export const RotateOnScroll: Story = {
  ...WithImgWrapperTemplate,
  args: {
    rounded: true,
  },
};

export const RotateParentOnScroll: Story = {
  ...WithImgWrapperTemplate,
  args: {
    ...RotateOnScroll.args,
    target: RotationScrollTarget.Parent,
  },
};

export const RotateChildrenOnScroll: Story = {
  ...WithImgWrapperTemplate,
  args: {
    ...RotateOnScroll.args,
    target: RotationScrollTarget.Children,
  },
};

export const RotateWithDivWrapperOnScroll: Story = {
  ...WithHtmlElementWrapperTemplate,
  args: {
    ...RotateOnScroll.args,
    height: 8,
    width: 8,
  },
};
