module.exports = {
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Dark Roasted Miles`,
    author: `Kithumini Jayasiri & Rahul Rangnekar`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/darkroastmiles`,
      },
      {
        name: `github`,
        url: `https://github.com/rahrang`,
      },
    ],
  },
};
