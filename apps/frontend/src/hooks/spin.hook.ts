import { useState } from 'react';

export const useSpin = (): [number, () => void] => {
  const [spin, setSpin] = useState<number>(0);
  const setRandomSpin = () => {
    const random = Math.ceil(Math.random() * 100);
    setSpin(random);
  };
  return [spin, setRandomSpin];
};
