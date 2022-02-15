import {
  mapSection,
  mapSectionContent,
  mapSectionTwoColumns,
} from "./map-section";

describe("map-section", () => {
  it("should render predefined section with no data", () => {
    const data = mapSection();
    expect(data).toEqual([]);
  });

  it("should map a section two columns with no data", () => {
    const sectionObj = mapSectionTwoColumns();
    expect(sectionObj.background).toBe(false);
    expect(sectionObj.component).toBe("");
    expect(sectionObj.sectionId).toBe("");
    expect(sectionObj.srcImg).toBe("");
    expect(sectionObj.text).toBe("");
    expect(sectionObj.title).toBe("");
  });

  it("should map a section two columns", () => {
    const sectionObj = mapSectionTwoColumns({
      __component: "section.section-two-columns",
      _id: "602fdf2d540c00269e056178",
      title: "title",
      description: "abc",
      metadata: {
        background: true,
        _id: "602fdf2d540c00269e05617b",
        name: "contact",
        section_id: "contact",
        __v: 0,
        id: "602fdf2d540c00269e05617b",
      },
      __v: 1,
      image: {
        _id: "602fdc2b540c00269e05616a",
        name: "javascript.svg",
        alternativeText: "Desenho de pessoas segurando logos do CSS, JS e HTML",
        caption: "Desenho de pessoas segurando logos do CSS, JS e HTML",
        hash: "javascript_b57bf48cda",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 30.31,
        url: "a.svg",
        provider_metadata: {
          public_id: "javascript_b57bf48cda",
          resource_type: "image",
        },
        provider: "cloudinary",
        width: 1030,
        height: 730,
        related: ["602fdf2d540c00269e056178", "602fdf2d540c00269e056172"],
        createdAt: "2021-02-19T15:41:31.808Z",
        updatedAt: "2021-02-19T15:54:22.590Z",
        __v: 0,
        id: "602fdc2b540c00269e05616a",
      },
      id: "602fdf2d540c00269e056178",
    });
    expect(sectionObj.background).toBe(true);
    expect(sectionObj.component).toBe("section.section-two-columns");
    expect(sectionObj.sectionId).toBe("contact");
    expect(sectionObj.srcImg).toBe("a.svg");
    expect(sectionObj.text).toBe("abc");
    expect(sectionObj.title).toBe("title");
  });

  it("should map a section content with no data", () => {
    const sectionContObj = mapSectionContent();

    expect(sectionContObj.background).toBe(false);
    expect(sectionContObj.component).toBe("");
    expect(sectionContObj.sectionId).toBe("");
    expect(sectionContObj.html).toBe("");
    expect(sectionContObj.title).toBe("");
  });
});
