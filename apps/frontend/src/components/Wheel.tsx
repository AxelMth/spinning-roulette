import React, { useEffect, useState } from 'react';
import './Wheel.scss';
import { useSpin } from '../hooks/spin.hook';
import WheelKnob from './WheelKnob';

interface Props {
  elements: { label: string; value: string; isChecked: boolean }[];
}

const getBackgroundColor = (index: number, count: number): string => {
  if (count % 3 === 1 && index === count-1) return getBackgroundColor(1, count+1);
  if (count % 3 === 1 && index === count-2) return getBackgroundColor(2, count+1);
  switch (index % 3) {
    case 0:
      return 'background-blue';
    case 1:
      return 'background-red';
    case 2:
      return 'background-green';
    default:
      return 'background-blue';
  }
};

const Wheel = ({ elements }: Props) => {
  const [spin, setRandomSpin, resetSpin] = useSpin();
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasWinner, setHasWinner] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  useEffect(() => {
    if (!elements.length) return;
    resetSpin();
    setIsSpinning(false);
    setHasWinner(false);
    setWinnerIndex(null);
  }, [elements]);
  useEffect(() => {
    if (!spin) return;
    setIsSpinning(true);
  }, [spin]);
  useEffect(() => {
    if (!isSpinning) return;
    let timeout = setTimeout(() => {
      setIsSpinning(false);
      setWinnerIndex((spin - 1) % elements.length);
    }, 2500);
    return () => clearTimeout(timeout)
  }, [isSpinning])
  useEffect(() => {
    if (!winnerIndex) return;
    setHasWinner(false);
    let timeout = setTimeout(() => {
      setHasWinner(true);
    }, 2000);
    return () => clearTimeout(timeout)
  }, [winnerIndex]);
  const notEnoughtElements =
    elements.length < 2 ? (
      <div className="message m-5">
        <div className="message-header">Erreur</div>
        <div className="message-body">
          Veuillez selectionner au moins 2 restaurants
        </div>
      </div>
    ) : null;
  const tooMuchElements =
    elements.length > 50 ? (
      <div className="message m-5">
        <div className="message-header">Erreur</div>
        <div className="message-body">
          Veuillez selectionner au maximum 50 restaurants
        </div>
      </div>
    ) : null;
  return notEnoughtElements ? (
    notEnoughtElements
  ) : tooMuchElements ? (
    tooMuchElements
  ) : (
    <div className="columns is-multiline is-gapless is-centered is-variable">
      <div className="column is-full is-flex is-justify-content-center is-align-items-center p-auto">
        <div style={{ position: 'relative' }}>
          <WheelKnob setSpin={() => {
            if (!isSpinning) setRandomSpin()
          }} />
          <div className={`wheel spin-animation-${elements.length}-${spin}`}>
            {elements.map(
              (element: any, index: number): JSX.Element => (
                <div
                  id={`slice-${elements.length}-${index + 1}`}
                  key={index}
                  className={`hold ${
                    spin && !isSpinning
                      ? winnerIndex === index
                        ? 'winner'
                        : 'loser'
                      : ''
                  }`}
                >
                  <div className={`slice-name-${elements.length}-${index + 1}`}>
                    <div className="slice-text">{element.label}</div>
                  </div>
                  <div
                    className={`wheel-part ${getBackgroundColor(index, elements.length)}`}
                  ></div>
                </div>
              )
            )}
          </div>
        </div>
        {hasWinner && !isSpinning ? (
          <div
            className={`winner-board ${getBackgroundColor(
              winnerIndex as number, elements.length
            )}`}
          >
            <span className="winner-name">
              {elements[winnerIndex as number]?.label} a gagné
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Wheel;
