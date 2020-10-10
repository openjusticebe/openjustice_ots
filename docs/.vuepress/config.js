module.exports = {
  plugins: [
    'flowchart',
    'vuepress-plugin-mermaidjs',
    'vuepress-plugin-smooth-scroll',
    'vuepress-plugin-graphviz',
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ],
  themeConfig: {
    home: true,
    heroText: 'Poulet OpenJustice.be',
    heroImage: './hero.png',
    tagline: 'Open Technical Specification',
    tags: ['introduction', 'help'],
    footer: 'Copyright © 2020 OpenJustice.be',
    sidebar: [
        {
            'title': 'OpenJustice.be',
            'path': '/',
            'collapsable': false
        },
        {
            'title': 'GDPR and privacy',
            'path': '/GDPR/',
            'collapsable': false
        },
        '/Users/',
        '/Functionalities/',
        '/Components/',
        {
            'title': 'Broker',
            'path': '/Broker/',
            'collapsable': false
        },
        {
            'title': 'Code of Conduct',
            'path': '/CodeOfConduct/',
            'collapsable': false
        },
        {
            'title': 'Demonstration',
            'path': '/Demonstration/',
            'collapsable': false
        },
        '/License/',
        {
            'title': 'End Matter',
            'path': '/EndMatter/',
            'collapsable': false
        },
    ]
  },
  markdown: {
    anchor: { permalink: true },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2, 3, 4] },
    extendMarkdown: md => {
      md.use(require('markdown-it-deflist'))
    }
  },
}
