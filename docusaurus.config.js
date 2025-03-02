import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'My Book',
  tagline: 'My book is cooler than dinosaurs',
  favicon: 'img/favicon.ico',
  url: 'https://ianoit.github.io',
  baseUrl: '/test-doc/',
  organizationName: 'ianoit',
  projectName: 'test-doc',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [ ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;