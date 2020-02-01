---
id: backend-constraints
title: Dataset Constraints
---

In order to fit a wide range of data and be able to convert this data into nodes and edges, we should define some constraints on the dataset:

- File should be in CSV format with headers.
- Each time based data row **must contain** the following fields:

  ```sh
  Start node: longitude, latitude, ID
  End node: longitude, latitude, ID
  Edge info: startTime, stopTime, ID
  ```

- Each time based data row **may have** additional fields:

  ```sh
  bikeID
  usertype
  birth year
  gender
  ```

## Example dataset

In our example [Hubway](https://s3.amazonaws.com/hubway-data/index.html) dataset, each row does meet the requirements and contains the following fields:

```sh
"tripduration",
"starttime",
"stoptime",
"start station id",
"start station name",
"start station latitude",
"start station longitude",
"end station id",
"end station name",
"end station latitude",
"end station longitude",
"bikeid",
"usertype",
"birth year",
"gender"
```
