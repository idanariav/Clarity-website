// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clarity',
  tagline: 'A desktop task manager for people who want more structure than a plain to-do list',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://clarity.idanariav.com',
  baseUrl: '/',

  // GitHub Pages deployment config -- mirrors idanariav/personal-website-docusaurus.
  organizationName: 'idanariav',
  projectName: 'Clarity-website',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        // No blog -- this site is a landing page + docs + legal pages only.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'description', content: 'Clarity is a desktop task manager built around Kanban boards, with saved views, a query language, automations, and two-way sync with Jira, Google Calendar, and Slack.'},
        {name: 'author', content: 'Idan Ariav'},
        {name: 'og:title', content: 'Clarity'},
        {name: 'og:description', content: 'A desktop task manager for people who want more structure than a plain to-do list.'},
        {name: 'og:url', content: 'https://clarity.idanariav.com/'},
        {name: 'og:type', content: 'website'},
      ],
      image: 'img/social-card.png',
      navbar: {
        logo: {
          alt: 'Clarity',
          src: 'img/clarity-wordmark.svg',
          srcDark: 'img/clarity-wordmark-dark.svg',
          width: 132,
          height: 30,
        },
        items: [
          {to: '/docs', label: 'Docs', position: 'left'},
          {to: '/pricing', label: 'Pricing', position: 'left'},
          {to: '/refund-policy', label: 'Refund Policy', position: 'left'},
          {to: '/terms', label: 'Terms', position: 'left'},
          {to: '/download', label: 'Download', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Product',
            items: [
              {label: 'Download', to: '/download'},
              {label: 'Docs', to: '/docs'},
              {label: 'Pricing', to: '/pricing'},
            ],
          },
          {
            title: 'Legal',
            items: [
              {label: 'Terms & Conditions', to: '/terms'},
              {label: 'Refund Policy', to: '/refund-policy'},
            ],
          },
          {
            title: 'Support',
            items: [
              {label: 'idan@idanariav.com', href: 'mailto:idan@idanariav.com'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Idan Ariav. Clarity.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {Partial<import("@easyops-cn/docusaurus-search-local").PluginOptions>} */
      ({
        hashed: true,
      }),
    ],
  ],
};

export default config;
