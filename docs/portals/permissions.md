# Permissions & Roles

Since day one, Arcsecond Portals are built with experience of real astronomical observatories and the various roles
inside them. In order to keep things easily understandable and avoid traps of complexity some other SaaS software fell
into, we keep a list of only 5 purely-hierarchical roles:

* `Superadmin`
* `Admin`
* `Member`
* `Observer` (Visitor)
* `Anonymous`

Below is a table listing the various permissions associated with each of theses roles.

## What are the access levels used in Arcsecond.io?

There are 5 levels, and their capabilities are listed below:

| -                                                          | Anonymous          | Visitor            | Member             | Admin              | Superadmin         |
|------------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| Download public data packages and datasets                 | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Login into organisation portal                             |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Download their own private datasets                        |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Download organisation's private data packages and datasets |                    |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Create datasets and upload data files                      |                    |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Create and delete data packages                            |                    |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Share data packages with visitors                          |                    |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Read organisation's information                            |                    |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Delete datasets or data files                              |                    |                    |                    | :heavy_check_mark: | :heavy_check_mark: |
| Invite new organisation members & visitors                 |                    |                    |                    | :heavy_check_mark: | :heavy_check_mark: |
| Change members access levels                               |                    |                    |                    | :heavy_check_mark: | :heavy_check_mark: |
| Update organisation's information                          |                    |                    |                    | :heavy_check_mark: | :heavy_check_mark: |
| Access and handle billing information                      |                    |                    |                    |                    | :heavy_check_mark: |
| Close organisation                                         |                    |                    |                    |                    | :heavy_check_mark: |
