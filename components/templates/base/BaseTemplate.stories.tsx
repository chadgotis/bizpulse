import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate from './BaseTemplate';

const meta: Meta<typeof BaseTemplate> = {
  title: 'Example/BaseTemplate',
  component: BaseTemplate,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BaseTemplate>;

export const Default: Story = {
  args: {
    sampleTextProp: 'Hello World',
  },
};
