export function mapSection(sections = []) {
  return sections.map((section) => {
    if (section.__component === "section.section-two-columns") {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === "section.section-content") {
      return mapSectionContent(section);
    }
    if (section.__component === "section.section-grid") {
      return mapSectionGrid(section);
    }

    return section;
  });
}

export const mapSectionTwoColumns = (twoColumns = {}) => {
  const {
    __component: component = "",
    title = "",
    description: text = "",
    image: { url: srcImg = "" } = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
  } = twoColumns;
  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};
export const mapSectionContent = (sectionContent = {}) => {
  const {
    __component: component = "",
    title = "",
    description: html = "",
    metadata: { background = false, section_id: sectionId = "" } = false,
  } = sectionContent;
  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};
export const mapSectionGrid = (sectionGrid = {}) => {
  return sectionGrid;
};
