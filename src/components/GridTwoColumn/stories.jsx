import { GridTwoColumns } from ".";

export default {
  title: "GridTwoColumns",
  component: GridTwoColumns,
  args: {
    title: "Grid Two Columns",
    text: "sjeknfksjefnskejfnskejfnskejfnskefjn skejfnskejfnskejfnsekjn skejfnskefjnse",
    srcImg: "assets/images/javascript.svg",
  },
  argTypes: {
    title: { type: "string" },
    text: { type: "string" },
    srcImg: { type: "string" },
    background: { type: "boolean" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
