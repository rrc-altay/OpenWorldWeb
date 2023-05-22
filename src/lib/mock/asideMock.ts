export const asideMock = {
  title: "Главное меню",
  slug: "glavnaya",
  path: "/glavnaya",
  data: {
    app: {
      description: "Текст/Описание",
      image: "url-to-image/",
      href: "url ссылки",
      href_text: "Текст ссылки",
    },
    phone: {
      phoneNumber: 88005554433,
      formatNumber: "8-800-555-44-33",
      link: "url-to-some-page",
    },
    partners: [
      {
        src: "url-to-img",
        link: "url-to-partner-site",
      },
      {
        src: "url-to-img",
        link: "url-to-partner-site",
      },
    ],
    elements: [
      {
        slug: "ustav",
        path: "/glavnaya/ustav",
        title: "Устав",
        content: [
          {
            type: "text",
            text: "description - lorem  ipsum",
            pdf: {
              name: "name of file",
              link: "url to file",
              autoOpen: "True/False",
            },
            img: {
              name: "",
              alt: "",
              url: "",
            },
            table_horizontal: {},
            table_vertical: {},
          },
        ],
      },
    ],
  },
};
