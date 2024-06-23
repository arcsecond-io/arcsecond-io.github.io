External Storage Dropbox
===

To let Arcsecond read the content of your Dropbox, here is the procedure (the detailed one with screenshots is in
preparation):

- Login to Dropbox.
- Open your [App Console](https://www.dropbox.com/developers/apps)
- Create an App
- Select "Scoped Access" for the API
- Choose "Full Dropbox", for the type of access (if you choose App Folder, the data Arcsecond will read must be placed
  under that folder). It is better to choose "Full Dropbox" and provide Arcsecond a Root Path, under which Arcsecond
  will restrict itself.
- Give an app name, and click "Create App" 
- In the new page, you are in the "Settings" tab.
- Scroll down to the `OAuth2` section, and find "Generate access token"
- Click "Generate"
- Copy-paste this token to Arcsecond Dropbox credentials modal.

