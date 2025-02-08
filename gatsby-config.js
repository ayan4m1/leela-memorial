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
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        configType: 'flat'
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          quietDeps: true
        }
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sharp-exif',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    '@ayan4m1/gatsby-plugin-root-import'
  ]
};
