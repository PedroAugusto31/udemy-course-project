import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "Sei lá, qualquer coisa",
  },
  argTypes: {
    children: { type: "string" },
  },
  backgrounds: {
    default: "blackTheme",
  },
};

export const Template = (args) => <Heading {...args} />;
