require('dotenv/config');

module.exports = {
  trailingSlash: 'always',
  siteMetadata: {
    title: 'Leela the Beagle',
    author: 'ayan4m1',
    description: 'Memorial for my beagle.',
    siteUrl: 'https://leelathebeagle.com/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Leela the Beagle',
        /* eslint-disable camelcase */
        short_name: 'Leela the Beagle',
        start_url: '/',
        background_color: '#995c30',
        theme_color: '#995c30',
        /* eslint-enable camelcase */
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp'
  ]
};
