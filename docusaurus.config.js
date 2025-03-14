import { themes as prismThemes } from "prism-react-renderer";

const organizationName = "pwneu";
const projectName = "learn";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CTF-Based Cybersecurity Learning",
  tagline: "CTF-Based Cybersecurity Learning",
  favicon: "img/PWNEU_RootLogo.svg",
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
            href: "https://github.com/pwneu/learn",
            className: "header-github-link",
            position: "right",
          },
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Tutorial",
      //           to: "/docs",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Stack Overflow",
      //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //         },
      //         {
      //           label: "Discord",
      //           href: "https://discordapp.com/invite/docusaurus",
      //         },
      //         {
      //           label: "Twitter",
      //           href: "https://twitter.com/docusaurus",
      //         },
      //       ],
      //     },
      //     {
      //       title: "More",
      //       items: [
      //         {
      //           label: "Blog",
      //           to: "/blog",
      //         },
      //         {
      //           label: "GitHub",
      //           href: "https://github.com/facebook/docusaurus",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
