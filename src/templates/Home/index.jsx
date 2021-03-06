import { Heading } from "../../components/Heading";
import mockBase from "../BaseTemplate/mock";
import * as Styled from "./styles";
import { BaseTemplate } from "../BaseTemplate";
import { GridTwoColumns } from "../../components/GridTwoColumn";
import { GridContent } from "../../components/GridContent";
import { GridText } from "../../components/GridText";
import { GridImage } from "../../components/GridImage";
import { useEffect } from "react";
import { mapData } from "../../api/map-data";
import { useState } from "react";
import { PageNotFound } from "../PageNotFound";
import { Loading } from "../Loading";
import { useLocation } from "react-router-dom";

export function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, "");
    const slug = pathName ? pathName : "landing-page";
    const load = async () => {
      try {
        await new Promise((r) => setTimeout(r, 2500));
        const jsonData = require("../../api/dados.json");
        const siteData = mapData(jsonData);
        setData(siteData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = "Página não encontrada";
    }
    if (data && !data.slug) {
      document.title = "Carregando...";
    }
    if (data && data.title) {
      document.title = data.title;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <div className="App">
      <Styled.Wrapper background="blue">
        <BaseTemplate
          links={links}
          footerHtml={footerHtml}
          logoData={{ text, link, srcImg }}
        >
          {sections.map((section, index) => {
            const { component } = section;
            const key = `${slug}-${index}`;
            if (component === "section.section-two-columns") {
              return <GridTwoColumns key={key} {...section} />;
            }
            if (component === "section.section-content") {
              return <GridContent key={key} {...section} />;
            }
            if (component === "section.section-grid-text") {
              return <GridText key={key} {...section} />;
            }
            if (component === "section.section-grid-image") {
              return <GridImage key={key} {...section} />;
            }
          })}
        </BaseTemplate>
      </Styled.Wrapper>
    </div>
  );
}
