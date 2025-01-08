import { themes as prismThemes } from "prism-react-renderer";

const organizationName = "pwneu";
const projectName = "learn";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PWNEU",
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
        docs: {
          sidebarPath: "./sidebars.js",
          path: "modules",
          routeBasePath: 'modules',
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main`,
        },
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "My Site Logo",
          src: "img/PWNEU_LightGreenLogo.svg",
          srcDark: "img/PWNEU_DarkGreenLogo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Modules",
          },
          { to: "/explorer", label: "Explorer", position: "left" },
          { to: "/cybersecurity-terms", label: "Cybersecurity Terms", position: "left" },
          { to: "/recommended-tools", label: "Recommended Tools", position: "left" },
          { to: "/resource-libraries", label: "Resource Libraries", position: "left" },
          { to: "/career-development", label: "Career Development", position: "left" },
          {
            href: "https://github.com/pwneu/learn",
            className: 'header-github-link',
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
