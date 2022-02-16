import {
  mapImageGrid,
  mapSection,
  mapSectionContent,
  mapSectionTwoColumns,
  mapTextGrid,
} from "./map-section";
import fakePagesData from "./dados.json";

describe("map-section", () => {
  it("should render predefined section with no data", () => {
    const data = mapSection();
    expect(data).toEqual([]);
  });
  it("should render section with correct data", () => {
    const data = mapSection(fakePagesData[0].sections);
    expect(data[0].component).toBe("section.section-two-columns");
  });
  it("should render section with invalid data", () => {
    const data = mapSection([
      {
        __component: "section.section-grid",
      },
    ]);
    const withoutComponent = mapSection([{}]);
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
  it("should map a section content", () => {
    const sectionContObj = mapSectionContent({
      __component: "section.section-content",
      _id: "602fdf2d540c00269e056177",
      title: "Pricing",
      content: "abc",
      metadata: {
        background: false,
        _id: "602fdf2d540c00269e056179",
        name: "pricing",
        section_id: "pricing",
        __v: 0,
        id: "602fdf2d540c00269e056179",
      },
      __v: 1,
      id: "602fdf2d540c00269e056177",
    });

    expect(sectionContObj.background).toBe(false);
    expect(sectionContObj.component).toBe("section.section-content");
    expect(sectionContObj.sectionId).toBe("pricing");
    expect(sectionContObj.html).toBe("abc");
    expect(sectionContObj.title).toBe("Pricing");
  });
  it("should map a text grid with no data", () => {
    const sectionContObj = mapTextGrid();

    expect(sectionContObj.background).toBe(false);
    expect(sectionContObj.component).toBe("section.section-grid-text");
    expect(sectionContObj.sectionId).toBe("");
    expect(sectionContObj.description).toBe("");
    expect(sectionContObj.title).toBe("");
    expect(sectionContObj.grid).toEqual([]);
  });
  it("should map a text grid with invalid data", () => {
    const sectionContObj = mapTextGrid({ text_grid: [{}] });
  });
  it("should map a text grid", () => {
    const sectionContObj = mapTextGrid({
      __component: "section.section-grid",
      description: "abc",
      title: "My Grid",
      text_grid: [
        {
          _id: "602fdf2d540c00269e05617c",
          title: "Teste 1",
          description: "Coisa",
          __v: 0,
          id: "602fdf2d540c00269e05617c",
        },
        {
          _id: "602fdf2d540c00269e05617d",
          title: "Teste 2",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          __v: 0,
          id: "602fdf2d540c00269e05617d",
        },
        {
          _id: "602fdf2d540c00269e05617e",
          title: "Teste 3",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          __v: 0,
          id: "602fdf2d540c00269e05617e",
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        _id: "602fdf2e540c00269e056199",
        name: "grid-one",
        section_id: "grid-one",
        __v: 0,
        id: "602fdf2e540c00269e056199",
      },
      __v: 2,
    });

    expect(sectionContObj.background).toBe(true);
    expect(sectionContObj.component).toBe("section.section-grid-text");
    expect(sectionContObj.sectionId).toBe("grid-one");
    expect(sectionContObj.description).toBe("abc");
    expect(sectionContObj.title).toBe("My Grid");
    expect(sectionContObj.grid[0].title).toBe("Teste 1");
    expect(sectionContObj.grid[0].description).toBe("Coisa");
  });

  it("should map a image grid with no data", () => {
    const sectionContObj = mapImageGrid(undefined);

    expect(sectionContObj.background).toBe(false);
    expect(sectionContObj.component).toBe("section.section-grid-image");
    expect(sectionContObj.sectionId).toBe("");
    expect(sectionContObj.description).toBe("");
    expect(sectionContObj.title).toBe("");
  });
  it("should map a image grid with no data", () => {
    const sectionContObj = mapImageGrid({ image_grid: [{}] });
  });
  it("should map a image grid with data", () => {
    const sectionContObj = mapImageGrid({
      __component: "section.section-grid",
      _id: "602fdf2d540c00269e056175",
      description: "abc",
      title: "Gallery",
      text_grid: [],
      image_grid: [
        {
          _id: "602fdf2d540c00269e056183",
          __v: 0,
          image: {
            _id: "602fde37540c00269e05616b",
            name: "http://source.unsplash.com/random/360x360?r=1",
            alternativeText: "abc",
            caption: "",
            hash: "360x360_r_1_6a2049d13a",
            ext: "",
            mime: "image/jpeg",
            size: 29.09,
            width: 360,
            height: 360,
            url: "a.svg",
            provider_metadata: {
              public_id: "360x360_r_1_6a2049d13a",
              resource_type: "image",
            },
            formats: {
              thumbnail: {
                name: "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                hash: "thumbnail_360x360_r_1_6a2049d13a",
                ext: "",
                mime: "image/jpeg",
                width: 156,
                height: 156,
                size: 6.48,
                path: null,
                url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_6a2049d13a.jpg",
                provider_metadata: {
                  public_id: "thumbnail_360x360_r_1_6a2049d13a",
                  resource_type: "image",
                },
              },
            },
            provider: "cloudinary",
            related: ["602fdf2d540c00269e056183"],
            createdAt: "2021-02-19T15:50:15.686Z",
            updatedAt: "2021-02-19T15:54:21.862Z",
            __v: 0,
            id: "602fde37540c00269e05616b",
          },
          id: "602fdf2d540c00269e056183",
        },
        {
          _id: "602fdf2d540c00269e056185",
          __v: 0,
          image: {
            _id: "602fde37540c00269e05616d",
            name: "http://source.unsplash.com/random/360x360?r=2",
            alternativeText: "Imagem do topo de uma cidade grande",
            caption: "Imagem do topo de uma cidade grande",
            hash: "360x360_r_2_38651a645b",
            ext: "",
            mime: "image/jpeg",
            size: 35.98,
            width: 360,
            height: 360,
            url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_2_38651a645b.jpg",
            provider_metadata: {
              public_id: "360x360_r_2_38651a645b",
              resource_type: "image",
            },
            formats: {
              thumbnail: {
                name: "thumbnail_http://source.unsplash.com/random/360x360?r=2",
                hash: "thumbnail_360x360_r_2_38651a645b",
                ext: "",
                mime: "image/jpeg",
                width: 156,
                height: 156,
                size: 7.97,
                path: null,
                url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_2_38651a645b.jpg",
                provider_metadata: {
                  public_id: "thumbnail_360x360_r_2_38651a645b",
                  resource_type: "image",
                },
              },
            },
            provider: "cloudinary",
            related: ["602fdf2d540c00269e056185"],
            createdAt: "2021-02-19T15:50:15.821Z",
            updatedAt: "2021-02-19T15:54:21.968Z",
            __v: 0,
            id: "602fde37540c00269e05616d",
          },
          id: "602fdf2d540c00269e056185",
        },
        {
          _id: "602fdf2d540c00269e056188",
          __v: 0,
          image: {
            _id: "602fde37540c00269e05616f",
            name: "http://source.unsplash.com/random/360x360?r=1",
            alternativeText: "Filme Kodak para câmeras antigas",
            caption: "",
            hash: "360x360_r_1_b3fcbf1d93",
            ext: "",
            mime: "image/jpeg",
            size: 12.24,
            width: 360,
            height: 360,
            url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_b3fcbf1d93.jpg",
            provider_metadata: {
              public_id: "360x360_r_1_b3fcbf1d93",
              resource_type: "image",
            },
            formats: {
              thumbnail: {
                name: "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                hash: "thumbnail_360x360_r_1_b3fcbf1d93",
                ext: "",
                mime: "image/jpeg",
                width: 156,
                height: 156,
                size: 3.77,
                path: null,
                url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_b3fcbf1d93.jpg",
                provider_metadata: {
                  public_id: "thumbnail_360x360_r_1_b3fcbf1d93",
                  resource_type: "image",
                },
              },
            },
            provider: "cloudinary",
            related: ["602fdf2d540c00269e056188"],
            createdAt: "2021-02-19T15:50:15.975Z",
            updatedAt: "2021-02-19T15:54:21.989Z",
            __v: 0,
            id: "602fde37540c00269e05616f",
          },
          id: "602fdf2d540c00269e056188",
        },
      ],
      metadata: {
        background: false,
        _id: "602fdf2e540c00269e0561a4",
        name: "gallery",
        section_id: "gallery",
        __v: 0,
        id: "602fdf2e540c00269e0561a4",
      },
      __v: 2,
      id: "602fdf2d540c00269e056175",
    });

    expect(sectionContObj.background).toBe(false);
    expect(sectionContObj.component).toBe("section.section-grid-image");
    expect(sectionContObj.sectionId).toBe("gallery");
    expect(sectionContObj.description).toBe("abc");
    expect(sectionContObj.title).toBe("Gallery");
    expect(sectionContObj.grid[0].srcImg).toBe("a.svg");
    expect(sectionContObj.grid[0].altText).toBe("abc");
  });
});
