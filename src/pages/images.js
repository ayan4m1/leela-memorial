import { useMemo } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { compareAsc, parseISO } from 'date-fns';
import { Container, Row, Col } from 'react-bootstrap';
import { getImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';

import Layout from 'components/layout';
import ModalThumbnail from 'components/modalThumbnail';

export default function ImagesPage({ data }) {
  const imageData = useMemo(() => {
    const newData = data.allImageSharp.nodes.map((node) => ({
      id: node.id,
      date: node.fields.exif.meta.dateTaken ?? '1970-01-01T00:00:00',
      image: getImage({ gatsbyImageData: node.image }),
      thumbnail: getImage({ gatsbyImageData: node.thumbnail }),
      thumbnailSize: {
        height: node.thumbnail.height,
        width: node.thumbnail.width
      }
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
            {imageData.map(({ id, image, thumbnail, thumbnailSize }) => (
              <ModalThumbnail
                key={id}
                image={image}
                thumbnail={thumbnail}
                height={thumbnailSize.height}
                width={thumbnailSize.width}
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
        image: gatsbyImageData(height: 1080)
        thumbnail: gatsbyImageData(height: 200)
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
