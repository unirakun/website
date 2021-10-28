module.exports = {
  siteMetadata: {
    title: 'unirakun',
    description: 'Développeurs unis',
    author: '@unirakun',
    siteUrl: 'https://unirakun.fr',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'unirakun - website',
        short_name: 'unirakun',
        start_url: '/',
        background_color: '#fefefe',
        theme_color: '#fefefe',
        display: 'minimal-ui',
        icon: 'src/images/us/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        }
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Muli']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: 'fef5442a-c7dd-421f-a62f-8836c9e2a665',
        enableDuringDevelop: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-142111529-1',
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
}
