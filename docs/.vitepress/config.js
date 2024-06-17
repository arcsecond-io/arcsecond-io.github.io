export default {
  title: 'Arcsecond Docs',
  description: 'The Astronomical Observations Platform',
  siteTitle: false,
  cleanUrls: 'with-subfolders',
  themeConfig: {
    logo: '/logo.svg',
    localSearch: true,
    nav: [
      { text: 'Astronomers', link: '/astronomers/' },
      { text: 'Observatory Portals', link: '/portals/' },
      { text: '(Globals)', link: '/globals/' }
    ],
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2018-present Arcsecond.io (F52 Tech).'
    },
    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/arcsecond.io' },
      { icon: 'github', link: 'https://github.com/arcsecond-io' },
      { icon: 'x', link: 'https://x.com/arcsecond_io' },
      { icon: 'instagram', link: 'https://www.instagram.com/arcsecond.io/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@arcsecond_io' },
      { icon: 'slack', link: 'https://join.slack.com/t/arcsecond-io/shared_invite/zt-yvsehzjl-jExYLVWzwuslMJum7r2GiA' }
    ],
    sidebar: {
      '/astronomers/nights/': [
        {
          text: 'Night Explorer',
          collapsible: true,
          items: [
            { text: 'Intro', link: '/astronomers/nights/explorer/' },
            { text: 'Times Bar & Location Selector', link: '/astronomers/nights/explorer/timesbar.md' },
            { text: 'Nodes Tree & Object Imports', link: '/astronomers/nights/explorer/nodestree.md' },
            { text: 'Global Layout & Options', link: '/astronomers/nights/explorer/layoutoptions.md' },
            { text: 'App Mode', link: '/astronomers/nights/explorer/appmode.md' }
          ]
        },
        {
          text: 'Night Plans & Rule Sets',
          collapsible: true,
          items: [
            { text: 'Intro', link: '/astronomers/nights/plans/' },
          ]
        },
        {
          text: 'Night Logs',
          collapsible: true,
          items: [
            { text: 'Intro', link: '/astronomers/nights/logs/' },
          ]
        }
      ],
      '/astronomers/data/': [
        {
          text: 'Data',
          collapsible: true,
          items: [
            { text: 'Arcsecond Cloud Storage', link: '/astronomers/data/cloud-storage.md' },
            { text: 'External Storage AWS', link: '/astronomers/data/external-storage-aws.md' },
            { text: 'External Storage Azure', link: '/astronomers/data/external-storage-aws.md' },
            { text: 'External Storage Dropbox', link: '/astronomers/data/external-storage-dropbox.md' },
            { text: 'External Storage FTP', link: '/astronomers/data/external-storage-ftp.md' },
            { text: 'External Storage SFTP', link: '/astronomers/data/external-storage-aws.md' },
            { text: 'External Storage Local Disk', link: '/astronomers/data/external-storage-localdisk.md' },
            { text: 'External Storage Archives', link: '/astronomers/data/external-storage-aws.md' },
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
            { text: 'CLI', link: '/ecosystem/cli.md' }
          ]
        }
      ]
    }
  }
}

