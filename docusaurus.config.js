module.exports = {
  title: "Gissy",
  tagline: "Geospatial Analysis",
  url: "https://gissy-docs.netlify.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "social-gissy-network", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Gissy",
      logo: {
        alt: "Gissy Logo",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/intro", label: "Docs", position: "left" },
        {
          href: "https://github.com/social-gissy-network",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Gissy`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/social-gissy-network/docs/edit/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
