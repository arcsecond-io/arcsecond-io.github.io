# Data Upload

Arcsecond CLI makes it easy to upload dataset files to your account or to a
shared organisation, on the cloud or on your own [Arcsecond.local](/local/)
install.

All non-hidden files are uploaded. Choose folders carefully so you only send the
data you actually want into Arcsecond.

## Upload Dataset Files With The CLI

Use:

```bash
arcsecond upload <folder> --dataset <name-or-uuid> --telescope <telescope-uuid>
```

The main options are:

- `--dataset` or `-d` to choose the dataset by name or UUID
- `--telescope` or `-t` to choose the telescope attached to the dataset
- `--portal` or `-p` to upload to a shared organisation (by its subdomain)
- `--raw` to mark the uploaded files as raw or reduced
- `--tags` to attach the same custom tags to every uploaded file

The command summarizes its settings and asks for confirmation before the upload
starts.

::: tip `--portal`: sharing to the cloud
`--portal` uploads into a shared organisation on the **cloud**, identified by
its subdomain — handy when you want to publish or share data beyond your own
install. It is also the starting point of a future **sync** mechanism between
Arcsecond.local and the cloud, so the option is here to stay.
:::

Useful discovery commands:

- `arcsecond datasets`
- `arcsecond telescopes`

## Upload Dataset Files With Python

```python
from arcsecond import (
    ArcsecondConfig,
    DatasetFileUploader,
    DatasetUploadContext,
    walk_folder_and_upload_files,
)

config = ArcsecondConfig()
context = DatasetUploadContext(
    config,
    input_dataset_uuid_or_name="My dataset",
    input_telescope_uuid="telescope-uuid",
    org_subdomain="my-portal",
    is_raw_data=False,
    custom_tags=["calibrated"],
)

context.validate()

walk_folder_and_upload_files(DatasetFileUploader, context, "/folder/path")
```

You can also upload files one by one:

```python
from pathlib import Path

from arcsecond import ArcsecondConfig, DatasetFileUploader, DatasetUploadContext

config = ArcsecondConfig()
context = DatasetUploadContext(
    config,
    input_dataset_uuid_or_name="My dataset",
    input_telescope_uuid="telescope-uuid",
)

context.validate()

for file_path in Path("/folder/path").glob("**/*"):
    if not file_path.is_file():
        continue

    uploader = DatasetFileUploader(context, str(file_path), display_progress=False)
    status, substatus, error = uploader.upload_file(
        is_raw=False,
        tags=["science"],
    )

    if error:
        raise error
```
