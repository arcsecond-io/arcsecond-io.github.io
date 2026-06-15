# Storage Credentials Security

When you attach an [external storage](./external-storages), Arcsecond.local needs
its credentials to read from it. Here is how those credentials are kept safe:

- Credentials leave the browser already encrypted, and reach the Arcsecond.local
  backend over HTTPS.
- They are stored in an **encrypted field** in the database. The field
  encryption key (`FIELD_ENCRYPTION_KEY`) lives in your install's `.env` file,
  outside the database itself — so a database dump alone never exposes them.
- No URL route exposes these credentials, and they never appear in any other
  Arcsecond resource, even to authenticated users, even to the storage owner.
- No credentials of any kind appear in the (private or public) source code.
- The database is backed up hourly (see [Backups](/local/backups)); keep those
  dumps and your `.env` on separately-permissioned storage, since together they
  would unseal the encrypted fields.

Because Arcsecond.local runs on **your own infrastructure**, these credentials
never leave your machines.

Do not hesitate to contact us for any additional question by
[email](mailto:team@arcsecond.io), or
[Slack](https://join.slack.com/t/arcsecond-io/shared_invite/zt-yvsehzjl-jExYLVWzwuslMJum7r2GiA).
