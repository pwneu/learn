import { themes as prismThemes } from "prism-react-renderer";

const organizationName = "pwneu";
const projectName = "learn";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CTF-Based Cybersecurity Learning",
  tagline: "CTF-Based Cybersecurity Learning",
  favicon: "img/rootlogo.svg",
  url: `https://${organizationName}.github.io`,
  baseUrl: `${projectName}`,
  trailingSlash: false,

  organizationName,
  projectName,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: "./sidebars.js",
        //   path: "modules",
        //   routeBasePath: "modules",
        //   editUrl: `https://github.com/${organizationName}/${projectName}/tree/main`,
        // },
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main`,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "modules",
        path: "docs/modules",
        routeBasePath: "modules",
        sidebarPath: "./sidebars.js",
        editUrl: `https://github.com/${organizationName}/${projectName}/tree/main`,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "toolkit",
        path: "docs/toolkit",
        routeBasePath: "toolkit",
        sidebarPath: "./sidebars.js",
        editUrl: `https://github.com/${organizationName}/${projectName}/tree/main`,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "article",
        path: "docs/article",
        routeBasePath: "article",
        sidebarPath: "./sidebars.js",
        editUrl: `https://github.com/${organizationName}/${projectName}/tree/main`,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: "TXN74OY6W5",
        // Public API key: it is safe to commit it
        apiKey: "a67bd5938217ccea15ee4f013a8ad591",
        indexName: "pwneuio",
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "PWNEU Logo",
          src: "img/PWNEU_LightGreenLogo.svg",
          srcDark: "img/PWNEU_DarkGreenLogo.svg",
        },
        items: [
          {
            type: "docSidebar",
            docsPluginId: "modules",
            sidebarId: "modulesSidebar",
            position: "left",
            label: "Modules",
          },
          {
            type: "docSidebar",
            docsPluginId: "toolkit",
            sidebarId: "toolkitSidebar",
            position: "left",
            label: "Toolkit",
          },
          {
            type: "docSidebar",
            docsPluginId: "article",
            sidebarId: "articleSidebar",
            position: "left",
            label: "Articles",
          },
          {
            href: "https://github.com/pwneu/learn",
            className: "header-github-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PWNEU Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
