---
id: backend-seed
title: Seeding the DB
sidebar_label: Seeding the DB
---

Make sure you properly [installed the system](setup.md) and `setup/fieldsMapping.js` is configured.

1. Upload your csv file to `data/dataset1.csv`.

2. Seed the first 100 entries.

   ```sh
   node build/seed.js data/dataset1.csv 0 100
   ```

3. Replay step 3 with `[101, 200]`, `[201, 300]`, **or** just seed the whole dataset at once.

   ```sh
   node build/seed.js data/dataset1.csv 0 NUM_OF_ROWS_IN_CSV
   ```
