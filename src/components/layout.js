import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Header from 'components/header';
import ModalContextProvider from 'components/modalContext';

export default function Layout({ title, description = '', children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <ModalContextProvider>
      <head>
        <title>
          {title} | {site.siteMetadata.title}
        </title>
        <meta name="description" content={metaDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={metaDescription} />
        <meta name="og:type" content="website" />
      </head>
      <Header siteTitle={site.siteMetadata.title} />
      <main className="mt-3 mb-2">{children}</main>
    </ModalContextProvider>
  );
}

Layout.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
