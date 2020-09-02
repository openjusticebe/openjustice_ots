module.exports = {
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
        '/License/',
        {
            'title': 'Code of Conduct',
            'path': '/CodeOfConduct/',
            'collapsable': false
        },
        '/Components/',
        {
            'title': 'Broker',
            'path': '/Broker/',
            'collapsable': false
        },
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
  }
}
