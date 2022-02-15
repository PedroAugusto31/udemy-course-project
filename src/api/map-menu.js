export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = "",
    logo_link: link = "",
    logo: { url: srcImg = "" } = "",
    menu: links = [],
  } = menu;
  return {
    newTab,
    text,
    srcImg,
    link,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (menuLinks = []) => {
  return menuLinks.map((item) => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = "",
      url: link = "",
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
