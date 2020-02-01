/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  main: {
    Introduction: ["intro", "architecture"],
    "User Manual": ["user-manual"],
    "Developer Manual": [
      "developer-intro",
      {
        type: "category",
        label: "Core",
        items: [
          "quick-start",
          "backend-setup",
          "backend-structure",
          "backend-constraints",
          "backend-seed"
        ]
      },
      {
        type: "category",
        label: "Dashboard",
        items: ["frontend-structure", "frontend-setup"]
      }
    ]
  }
};
