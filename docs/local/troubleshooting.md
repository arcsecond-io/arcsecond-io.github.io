# Troubleshooting

## Windows + Docker Desktop: “/data is not writable” troubleshooting blurb (copy/paste)

- Check Docker Desktop is running (the whale icon should be active). If it isn’t, docker compose commands may hang or
  fail.
- Verify the host folder exists and is accessible: create the directory referenced by SHARED_DATA_PATH in File
  Explorer (and ensure you can create a file in it).
- Avoid network / cloud-synced paths at first (common culprits: UNC paths like \\server\share, mapped drives,
  OneDrive/SharePoint-synced folders). Prefer something simple like C:\Users\<name>\ArcsecondData.
- If you use another drive (D:\ / external drive): enable sharing in Docker Desktop. Go to Docker Desktop → Settings →
  Resources → File sharing (wording may vary) and add the drive/folder, then Apply & Restart.
- Confirm the mount from inside a container (quick sanity check): Run a one-off container that writes a test file to
  /data and confirm the file appears on the host. If it can’t write, it’s almost always a sharing/permissions/path
  issue.
  