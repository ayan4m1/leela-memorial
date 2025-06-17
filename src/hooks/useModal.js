import { createContext, useContext } from 'react';

export const ModalContext = createContext({
  visible: false,
  show: () => {},
  hide: () => {}
});

export default function useModal() {
  return useContext(ModalContext);
}
