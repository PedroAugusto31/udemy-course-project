import { SectionBackground } from ".";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>ta maluco da cabess</p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
