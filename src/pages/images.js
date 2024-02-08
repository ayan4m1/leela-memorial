import { useMemo } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';
import { compareAsc, parseISO } from 'date-fns';

import Layout from 'components/layout';

export default function ImagesPage({ data }) {
  const imageData = useMemo(() => {
    const newData = data.allImageSharp.nodes.map((node) => ({
      id: node.id,
      date: node.fields.exif.meta.dateTaken ?? '1970-01-01T00:00:00',
      image: getImage(node),
      height: node.gatsbyImageData.height,
      width: node.gatsbyImageData.width
    }));

    newData.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));

    return newData;
  }, [data]);

  // const firstImageDate = imageData[0].date;
  // const lastImageData = imageData[imageData.length - 1].date;

  // const monthSpan = differenceInMonths(
  //   parseISO(lastImageData),
  //   parseISO(firstImageDate)
  // );

  return (
    <Layout title="Images" description="Gallery of beagle images.">
      <Container>
        <Row className="mb-2">
          <Col>
            <h1>
              <FontAwesomeIcon icon={faImagePortrait} size="2x" fixedWidth />{' '}
              Images
            </h1>
          </Col>
        </Row>
        <Row>
          <Col
            className="d-flex flex-wrap"
            style={{ justifyContent: 'space-evenly' }}
          >
            {imageData.map(({ id, image, height, width }) => (
              <GatsbyImage
                key={id}
                image={image}
                alt="Beagle"
                style={{
                  height,
                  width
                }}
              />
            ))}
          </Col>
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
        gatsbyImageData(height: 200)
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
