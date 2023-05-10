import type { Meta, StoryObj } from "@storybook/react";

import { DraggableElement } from "components";

const meta: Meta<typeof DraggableElement> = {
  title: "Organisms/DraggableElement",
  component: DraggableElement,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DraggableElement>;

const DraggableElementTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <DraggableElement {...args}>
          <div
            style={{
              background: "var(--secondary)",
              color: "var(--light-primary)",
              padding: "calc(var(--s-1) * 1rem)",
              width: "max-content",
            }}
          >
            Drag me!
          </div>
        </DraggableElement>
      </div>
    );
  },
};

export const Snap: Story = {
  ...DraggableElementTemplate,
  args: {
    shouldSnap: true,
  },
};

export const Rebound: Story = {
  ...DraggableElementTemplate,
  args: {
    shouldRebound: true,
  },
};
