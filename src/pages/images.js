import { useMemo } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { compareAsc, parseISO } from 'date-fns';
import { Col, Container, Row } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from 'components/layout';

export default function ImagesPage({ data }) {
  const imageData = useMemo(() => {
    const newData = data.allImageSharp.nodes.map((node) => ({
      id: node.id,
      date: node.fields.exif.meta.dateTaken ?? '1970-01-01T00:00:00',
      image: getImage(node)
    }));

    newData.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));

    return newData;
  }, [data]);

  return (
    <Layout title="Images">
      <Container>
        <h1>Images</h1>
        <Row>
          {imageData.map(({ id, image }) => (
            <Col xs={2} key={id} className="m-1">
              <GatsbyImage image={image} alt="Beagle" />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}

ImagesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query {
    allImageSharp {
      nodes {
        id
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [WEBP]
        )
        fields {
          exif {
            meta {
              dateTaken
            }
          }
        }
      }
    }
  }
`;
