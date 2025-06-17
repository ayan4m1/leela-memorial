import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import useModal from 'hooks/useModal';

export default function ModalThumbnail({ image, thumbnail, height, width }) {
  const { show } = useModal();
  const openModal = useCallback(() => {
    console.log('open modal called');
    show(image);
  }, [image, show]);

  return (
    <div style={{ height, width }} onClick={openModal}>
      <GatsbyImage
        image={thumbnail}
        alt="Leela"
        style={{
          height,
          width,
          cursor: 'pointer',
          border: '1px solid #666',
          boxShadow: '2px 2px 1px 0px rgba(210,210,210,0.4)',
          marginBottom: '8px',
          borderRadius: '8px'
        }}
      />
    </div>
  );
}

ModalThumbnail.propTypes = {
  image: PropTypes.object.isRequired,
  thumbnail: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};
