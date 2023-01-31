import {RefObject, useEffect} from 'react';

export const useOutsideClick = (ref: RefObject<Element>, outSideClickCallback: () => void): void => {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (ref?.current && !ref?.current.contains(event.target)) {
        outSideClickCallback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
