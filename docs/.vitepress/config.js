export default {
  themeConfig: {
    logo: '/logo-circle-sm.png',
    siteTitle: false,
    nav: [
      { text: 'iObserve', link: '/iobserve/introduction' },
      { text: 'Pro Tools', link: '/tools/introduction' },
      { text: 'Observatory Portals', link: '/portals/introduction' }
    ],
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2018-present Arcsecond.io (F52 Tech).'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/arcsecond-io' },
      { icon: 'twitter', link: 'https://twitter.com/arcsecond_io' }
    ],
    sidebar: {
      '/iobserve/': [],
      '/tools/': [],
      '/portals/': [
        {
          text: 'General',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/portals/introduction.md' },
            { text: 'Portal Registration', link: '/portals/registration.md' },
            { text: 'Permissions & Roles', link: '/portals/permissions.md' },
            { text: 'Cloud vs Self-Hosting', link: '/portals/self-hosting.md' }
          ]
        },
        {
          text: 'Data',
          collapsible: true,
          items: [
            { text: 'Cloud Storage', link: '/portals/storage-cloud.md' },
            { text: 'Data files', link: '/portals/coming-soon.md' },
            { text: 'Datasets', link: '/portals/coming-soon.md' },
            { text: 'Packages', link: '/portals/coming-soon.md' },
            { text: 'Observed Targets', link: '/portals/coming-soon.md' },
            { text: 'Night Observations', link: '/portals/coming-soon.md' }
          ]
        },
        {
          text: 'Operations',
          collapsible: true,
          items: [
            { text: 'Schedule', link: '/portals/coming-soon.md' },
            { text: 'Proposals', link: '/portals/coming-soon.md' }
          ]
        },
        {
          text: 'Administration',
          collapsible: true,
          items: [
            { text: 'Members', link: '/portals/coming-soon.md' },
            { text: 'Statistics', link: '/portals/coming-soon.md' },
            { text: 'Billing & Invoices', link: '/portals/coming-soon.md' },
            { text: 'Portal Settings', link: '/portals/coming-soon.md' }
          ]
        },
        {
          text: 'APIs & OSS Tools',
          collapsible: true,
          items: [
            { text: 'REST Endpoints', link: '/portals/endpoints.md' },
            { text: 'Oort Cloud Uploader', link: '/portals/oort-uploader.md' }
          ]
        }
      ]
    }
  }
}

