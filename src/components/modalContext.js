import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useCallback, useEffect, useState } from 'react';

import { ModalContext } from 'hooks/useModal';
import { Col } from 'react-bootstrap';

export default function ModalContextProvider({ children }) {
  const [image, setImage] = useState(null);
  const show = useCallback((image) => setImage(image), []);
  const hide = useCallback(() => setImage(null), []);
  const handleEsc = useCallback(
    (e) => {
      if (e.key === 'Escape' && image) {
        e.preventDefault();
        e.stopPropagation();
        hide();
      }
    },
    [hide, image]
  );

  useEffect(() => {
    document.querySelector('html').addEventListener('keydown', handleEsc);

    return () => {
      document.querySelector('html').removeEventListener('keydown', handleEsc);
    };
  }, [handleEsc]);

  return (
    <ModalContext.Provider value={{ visible: Boolean(image), show, hide }}>
      {children}
      {Boolean(image) && (
        <div
          onClick={hide}
          style={{
            left: 0,
            position: 'fixed',
            top: 0,
            zIndex: 1,
            height: '100vw',
            width: '100%',
            display: 'flex'
          }}
        >
          <GatsbyImage
            as={Col}
            imgStyle={{
              padding: 20,
              objectFit: 'contain',
              maxHeight: '100vw',
              position: 'fixed'
            }}
            image={image}
            alt="Leela"
          />
        </div>
      )}
    </ModalContext.Provider>
  );
}

ModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  rootRef: PropTypes.object
};
