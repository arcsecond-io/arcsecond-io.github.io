export default {
  title: 'Arcsecond.local',
  description: 'Arcsecond.local — the self-hosted observatory platform',
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
      { text: 'The Apps', link: '/apps/' },
      { text: 'CLI', link: '/cli/' },
      { text: 'Developers', link: '/developers/' },
      { text: 'Pricing', link: '/local/pricing' },
    ],
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2018-present Arcsecond.io (4Pi Technologies).'
    },
    socialLinks: [
      { icon: 'slack', link: 'https://join.slack.com/t/arcsecond-io/shared_invite/zt-yvsehzjl-jExYLVWzwuslMJum7r2GiA' },
      { icon: 'github', link: 'https://github.com/arcsecond-io' },
      { icon: 'youtube', link: 'https://www.youtube.com/@arcsecond_io' },
    ],
    sidebar: {
      '/local/': [
        {
          text: 'Arcsecond.local',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/local/index.md' },
            { text: 'Installation', link: '/local/installation.md' },
            { text: 'Updates', link: '/local/updates.md' },
            { text: 'Troubleshooting', link: '/local/troubleshooting.md' },
            { text: 'Pricing', link: '/local/pricing.md' },
          ]
        },
        {
          text: 'Self-Hosting',
          collapsible: true,
          items: [
            { text: 'Access from Other Computers', link: '/local/lan-access.md' },
            { text: 'Alpaca Server on the LAN', link: '/local/alpaca-lan.md' },
            { text: 'Live-Image Proxy', link: '/local/webcam.md' },
            { text: 'Backups', link: '/local/backups.md' },
            { text: 'Rotate Postgres Password', link: '/local/rotate-postgres-password.md' },
          ]
        },
      ],
      '/apps/': [
        {
          text: 'The Apps',
          items: [
            { text: 'Overview', link: '/apps/index.md' },
          ]
        },
        {
          text: 'Night Studio',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/apps/night-studio/index.md' },
          ]
        },
        {
          text: 'Control Room',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/apps/control-room/index.md' },
          ]
        },
        {
          text: 'Data Grand Central',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/apps/data/index.md' },
            { text: 'Storage', link: '/apps/data/storage.md' },
            { text: 'Datasets', link: '/apps/data/datasets.md' },
            { text: 'External Storages', link: '/apps/data/external-storages.md' },
            { text: 'External Storage — AWS S3', link: '/apps/data/external-storage-aws.md' },
            { text: 'External Storage — Dropbox', link: '/apps/data/external-storage-dropbox.md' },
            { text: 'External Storage — Local Disk', link: '/apps/data/external-storage-localdisk.md' },
            { text: 'External Storage — FTP', link: '/apps/data/external-storage-ftp.md' },
            { text: 'External Storage — SFTP', link: '/apps/data/external-storage-sftp.md' },
            { text: 'External Storage — Azure', link: '/apps/data/external-storage-azure.md' },
            { text: 'External Storage — Archives', link: '/apps/data/external-storage-archives.md' },
            { text: 'Data Packages', link: '/apps/data/datapackages.md' },
            { text: 'File Browser', link: '/apps/data/filebrowser.md' },
            { text: 'Follow-Up Targets', link: '/apps/followup/index.md' },
            { text: 'Credentials & Security', link: '/apps/data/credentials-security.md' },
          ]
        },
        {
          text: 'Observatory Headquarters',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/apps/headquarters/index.md' },
            { text: 'Permissions & Roles', link: '/apps/headquarters/permissions.md' },
          ]
        }
      ],
      '/cli/': [
        {
          text: 'Command-Line Interface',
          collapsible: true,
          items: [
            { text: 'Introduction', link: '/cli/index.md' },
            { text: 'Install & Login', link: '/cli/install.md' },
            { text: 'Installing on Windows', link: '/cli/install-windows.md' },
            { text: 'Data Upload', link: '/cli/upload.md' },
            { text: 'Python API — Basics', link: '/cli/api-basics.md' },
            { text: 'Python API — Resources', link: '/cli/resources.md' },
          ]
        }
      ],
      '/developers/': [
        {
          text: 'Developers',
          collapsible: true,
          items: [
            { text: 'Overview', link: '/developers/index.md' },
            { text: 'REST APIs', link: '/developers/apis.md' },
            { text: 'aa-js', link: '/developers/aa-js.md' },
          ]
        }
      ]
    }
  }
}
