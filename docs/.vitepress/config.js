export default {
  title: 'Arcsecond Docs',
  description: 'The Astronomical Observations Platform',
  siteTitle: false,
  cleanUrls: 'with-subfolders',
  ignoreDeadLinks: [
    /^https?:\/\/localhost/,
  ],
  themeConfig: {
    logo: '/logo.svg',
    localSearch: true,
    nav: [
      { text: 'Arcsecond.local', link: '/local/' },
      { text: 'Overview of Our Tools', link: '/tools/' },
      { text: 'Observatory Portals', link: '/portals/' },
      { text: 'API & Libraries', link: '/ecosystem/' },
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
      '/local/': [
        {
          text: 'Arcsecond.local',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/local/index.md' },
            { text: 'Installation', link: '/local/installation.md' },
          ]
        },
      ],
      '/tools/': [
        {
          text: 'Night Studio',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/tools/index.md' },
            { text: 'Night Explorer', link: '/tools/night-explorer.md' },
          ]
        },
        {
          text: 'Control Room',
          items: []
        },
        {
          text: 'Data Grand Central',
          items: [
            { text: 'Cloud Storage', link: '/tools/data/cloud-storage.md' },
            { text: 'External Storages', link: '/tools/data/external-storages.md' },
            { text: 'External Storage AWS', link: '/tools/data/external-storage-aws.md' },
            { text: 'External Storage Azure', link: '/tools/data/external-storage-azure.md' },
            { text: 'External Storage Dropbox', link: '/tools/data/external-storage-dropbox.md' },
            { text: 'External Storage FTP', link: '/tools/data/external-storage-ftp.md' },
            { text: 'External Storage SFTP', link: '/tools/data/external-storage-sftp.md' },
            { text: 'External Storage Local Disk', link: '/tools/data/external-storage-localdisk.md' },
            { text: 'External Storage Archives', link: '/tools/data/external-storage-archives.md' },
            { text: 'Datasets', link: '/tools/data/datasets.md' },
            { text: 'Data Packages', link: '/tools/data/datapackages.md' },
            { text: 'File Browser', link: '/tools/data/filebrowser.md' }
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
      '/ecosystem/': [
        {
          text: 'APIs & Libraries',
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

