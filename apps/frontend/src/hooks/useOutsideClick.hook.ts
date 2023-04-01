import _ from 'lodash';
import { MutableRefObject, RefObject, useEffect } from 'react';

export const useOutsideClick = (ref: RefObject<Element>, outSideClickCallback: () => void, {ignoreRefs}: { ignoreRefs: RefObject<Element>[] } = { ignoreRefs: [] }): void => {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (_.some(ignoreRefs, (refToIgnore) => refToIgnore?.current.contains(event.target))) {
        console.log("Ignoring ref: ", event.target)
        return;
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (ref?.current && !ref?.current.contains(event.target)) {
        outSideClickCallback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
