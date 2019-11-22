/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Robust Framework',
  tagline: 'Framework designed for NodeJS veterans',
  url: 'https://robust.github.io',
  baseUrl: '/robust-website/',
  favicon: 'img/favicon.ico',
  organizationName: 'tekuasia', // Usually your GitHub org/user name.
  projectName: 'robust-website', // Usually your repo name.
  customFields: {
    description: ['Build rock-solid applications in minutes. Fully compatible ', 'with major JS frameworks / libraries.'],
    descriptionCommands: [
      'robust new <span class="highlight">api</span>',
      'robust new <span class="highlight">mvc</span>',
      'robust new <span class="highlight">console</span>'
    ]
  },
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'Robust',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg'
      },
      links: [
        { to: 'docs/guide-started', label: 'Documentation', position: 'left' },
        {
          href: 'https://github.com/tekuasia/robust',
          label: 'Coming soon',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting started',
              to: 'docs/guide-started'
            },
            {
              label: 'CLI tool',
              to: 'docs/guide-cli'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Chat',
              href: 'https://discord.gg/dbzf3n'
            },
            {
              label: 'Issues',
              href: 'https://github.com/tekuasia/robust/issues'
            },
            {
              label: 'Stackoverflow',
              href: 'https://stackoverflow.com/questions/tagged/robust'
            }
          ]
        }
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/logo.svg'
      },
      copyright: `Copyright © ${new Date().getFullYear()} TekuAsia. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
