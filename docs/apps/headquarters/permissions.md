# Permissions & Roles

Since day one, Arcsecond has been built with the experience of real astronomical
observatories and the various roles inside them. To keep things easily
understandable and avoid the complexity traps that some other software falls
into, every Arcsecond.local install uses a list of only 5 purely-hierarchical
roles:

* `Superadmin`
* `Admin`
* `Member`
* `Observer` (Visitor)
* `Anonymous`

Below is the table of permissions associated with each role.

| -                                                          | Anonymous          | Visitor            | Member             | Admin              | Superadmin         |
|------------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| Download public data packages and datasets                 | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Log into the organisation                                  |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Download their own private datasets                        |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Download the organisation's private data packages and datasets |                |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Create datasets and upload data files                      |                    |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Create and delete data packages                            |                    |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Share data packages with visitors                          |                    |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Read the organisation's information                         |                    |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Delete datasets or data files                              |                    |                    |                    | :heavy_check_mark: | :heavy_check_mark: |
| Invite new members & visitors                              |                    |                    |                    | :heavy_check_mark: | :heavy_check_mark: |
| Change members' access levels                              |                    |                    |                    | :heavy_check_mark: | :heavy_check_mark: |
| Create/associate Observing Sites                           |                    |                    |                    | :heavy_check_mark: | :heavy_check_mark: |
| Create/associate Telescopes                                |                    |                    |                    | :heavy_check_mark: | :heavy_check_mark: |
| Update the organisation's information                       |                    |                    |                    | :heavy_check_mark: | :heavy_check_mark: |
| Close the organisation                                     |                    |                    |                    |                    | :heavy_check_mark: |
