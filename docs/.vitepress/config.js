export default {
  title: 'Arcsecond Docs',
  description: 'A Platform for Astronomers and Observatories',
  siteTitle: false,
  cleanUrls: 'with-subfolders',
  themeConfig: {
    logo: '/logo-circle-sm.png',
    nav: [
      { text: 'iObserve & Pro Tools', link: '/tools/iobserve.md' },
      { text: 'Observatory Portals', link: '/portals/introduction' },
      { text: 'Resources', link: '/resources/introduction' },
      { text: 'APIs & Ecosystem', link: '/ecosystem/introduction' }
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
      '/tools/': [
        {
          text: 'iObserve',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/tools/iobserve.md' },
            { text: 'Times Bar & Location Selector', link: '/tools/iobserve/timesbar.md' },
            { text: 'Nodes Tree & Object Imoorts', link: '/tools/iobserve/nodestree.md' }
          ]
        },
        {
          text: 'Pro Tools',
          collapsible: true,
          items: [
            { text: 'Starlinks Tracks', link: '/tools/starlinks.md' },
            { text: 'Exoplanet Transits', link: '/tools/coming-soon.md' },
            { text: 'Night Duration', link: '/tools/coming-soon.md' },
            { text: 'Yearly Visibility', link: '/tools/coming-soon.md' },
            { text: 'Standard Stars', link: '/tools/coming-soon.md' },
            { text: 'Almanac', link: '/tools/coming-soon.md' },
            { text: 'Coordinates Converter', link: '/tools/coming-soon.md' },
            { text: 'Times Converter', link: '/tools/coming-soon.md' },
            { text: 'Distances Converter', link: '/tools/coming-soon.md' }
          ]
        }
      ],
      '/resources/': [
        {
          text: 'Resources',
          collapsible: true,
          items: [
            { text: 'Observing Sites', link: '/resources/starlinks.md' },
            { text: 'Satellites', link: '/resources/coming-soon.md' },
            { text: 'Standard Stars Catalogues', link: '/resources/coming-soon.md' },
            { text: 'Public Target Lists', link: '/resources/coming-soon.md' }
          ]
        }
      ],
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

