import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import Header from 'components/header';
import ModalContextProvider from 'components/modalContext';

export default function Layout({
  title,
  description = '',
  lang = 'en',
  meta = [],
  children
}) {
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
      <Helmet
        htmlAttributes={{
          lang
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription
          },
          {
            property: `og:title`,
            content: title
          },
          {
            property: `og:description`,
            content: metaDescription
          },
          {
            property: `og:type`,
            content: `website`
          }
        ].concat(meta)}
      />
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
