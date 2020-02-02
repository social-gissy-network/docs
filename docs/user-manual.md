---
id: user-manual
title: Instructions
---

import useBaseUrl from "@docusaurus/useBaseUrl";
export const Image = ({width = '100%',src}) => (<img style={{width}} src={useBaseUrl(src)}/>);

The instructions regarding to the control panel appearing on the left side of the UI.

<Image src={'img/control-panel.png'}/>

## Modes

### Normal

- In this mode you are **querying for edges**.
- You can filter the edges by it's properties.

### Path

- In this mode you are **querying for a sub graph**.
- You can select nodes that will be the source nodes of the sub graph.
- You can filter the sub graph by the edge's properties appearing on it.

### Most Connected

- Similar to Mode: Path, with one difference: the source nodes are automatically selected. The source nodes are the most connected nodes in the complete graph (max. out degree).

## Scenarios

### Edge query

> View a linked graph that shows links/paths between geographical points.

1. Select: Mode **"Normal"**.
2. Hit **"Apply"**.

### Paths query

> Select a specific node or group of nodes and see (filter) only nodes and edges that are connected to these source nodes (up to N levels removed).

1. Select: Mode **"Paths"**.
2. Select: **Path length "N"**.
3. Click on the desired source nodes in the graph, you can hold `ctrl` for multiple selection.
4. Make sure it appears in the **"Selected Nodes"** section in the control panel.

   <Image src={'img/selected-nodes.png'} width="50%"/>

5. Hit **"Apply"**.

### Date Range query

> Filter the graph based on a time window.

1. Drag the **"Dates Range"** controller:

   <Image src={'img/date-ranges.png'} width="50%"/>

2. Hit **"Apply"**.

### Most Connected query

> Query for the top N nodes with the most connections.

1. Select: Mode **"Most Connected"**.
2. Select: **Path length "N"**.
3. Select: **Path limit "M"**.
4. Hit **"Apply"**.
