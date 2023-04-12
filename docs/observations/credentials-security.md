Storage Credentials Security
===

In a nutshell:

- Credentials are sent encrypted to the Arcsecond backend.
- They are stored in an encrypted field in the database, which is itself encrypted at rest. The encryption key is
  safely stored outside the Arcsecond system.
- No URL route is open to access these credentials, and they never appear in other Arcsecond resources, even for
  authenticated users, even for the storage owner.
- The Arcsecond backend is protected by a Multiple-Factor authentication, whose secret key is regularly updated.
- No credentials of Arcsecond whatsoever appear in the (private nor public) code itself.
- The database is backed up every hour in an encrypted and dedicated AWS S3 bucket.
- Arcsecond own AWS credentials are split into single-purpose single-bucket users, with rolling keys.

Do not hesitate to contact us for any additional question by [email](mailto:cedric@arcsecond.io),
or [Slack](https://join.slack.com/t/arcsecond-io/shared_invite/zt-yvsehzjl-jExYLVWzwuslMJum7r2GiA).
