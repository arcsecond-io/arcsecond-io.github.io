export default {
  title: 'Arcsecond Docs',
  description: 'The Astronomical Observations Platform',
  siteTitle: false,
  cleanUrls: 'with-subfolders',
  themeConfig: {
    logo: '/logo-circle-sm.png',
    localSearch: true,
    nav: [
      { text: 'Night Explorer, Plans & Logs', link: '/nights/' },
      { text: 'Targets & Data', link: '/observations/' },
      { text: 'Observatory Portals', link: '/portals/' },
      { text: 'Resources', link: '/resources/' },
      { text: 'APIs & Ecosystem', link: '/ecosystem/' }
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
      '/nights/': [
        {
          text: 'Night Explorer (fka iObserve)',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/nights/explorer/' },
            { text: 'Times Bar & Location Selector', link: '/nights/explorer/timesbar.md' },
            { text: 'Nodes Tree & Object Imports', link: '/nights/explorer/nodestree.md' },
            { text: 'Global Layout & Options', link: '/nights/explorer/layoutoptions.md' }
          ]
        },
        {
          text: 'Night Plans',
          collapsible: true,
          items: [
          ]
        },
        {
          text: 'Night Logs',
          collapsible: true,
          items: [
          ]
        }
      ],
      '/targets/': [
        {
          text: 'Overview',
          link: '/observations/index.md'
        },
        {
          text: 'Data',
          collapsible: true,
          items: [
            { text: 'Arcsecond Cloud Storage', link: '/observations/cloud-storage.md' },
            { text: 'External Storage Credentials', link: '/observations/credentials-security.md' },
            { text: 'External Storage AWS', link: '/observations/external-storage-aws.md' },
            { text: 'External Storage Dropbox', link: '/observations/external-storage-dropbox.md' },
            { text: 'External Storage FTP', link: '/observations/external-storage-ftp.md' },
            { text: 'External Storage Local Disk', link: '/observations/external-storage-localdisk.md' }
          ]
        },
        {
          text: 'Observations',
          items: [
            { text: 'Observing Nights', link: '/observations/observing-nights.md' },
            { text: 'Observing Runs', link: '/observations/observing-runs.md' }
          ]
        }
      ],
      '/portals/': [
        {
          text: 'General',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/portals/index.md' },
            { text: 'Portal Registration', link: '/portals/registration.md' },
            { text: 'Paying Account', link: '/portals/paying-account.md' },
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
            { text: 'Observed Targets', link: '/portals/observed-targets.md' },
            { text: 'Night Observations', link: '/portals/observations.md' }
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
            { text: 'Oort Cloud Uploader', link: '/ecosystem/oort.md' }
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
      '/ecosystem/': [
        {
          text: 'Ecosystem',
          collapsible: true,
          items: [
            { text: 'APIs', link: '/ecosystem/apis.md' },
            { text: 'aa-js', link: '/ecosystem/aa-js.md' },
            { text: 'CLI & Oort', link: '/ecosystem/cli-oort.md' }
          ]
        }
      ]
    }
  }
}

