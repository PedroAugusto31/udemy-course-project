import { BaseTemplate } from ".";
import mock from "./mock";

import { GridText } from "../../components/GridText";
import gridMock from "../../components/GridText/mock";

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  ...mock,
};

export default {
  title: "BaseTemplate",
  component: BaseTemplate,
  args: mockBase,
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <BaseTemplate {...args} />
    </div>
  );
};
