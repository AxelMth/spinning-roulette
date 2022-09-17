import React, { useEffect, useState } from 'react';
import './Wheel.scss';
import { useSpin } from '../hooks/spin.hook';
import WheelKnob from './WheelKnob';

interface Props {
  elements: { label: string; value: string; isChecked: boolean }[];
}

const getBackgroundColor = (index: number): string => {
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
  const [spin, setRandomSpin] = useSpin();
  const [isSpinning, setIsSpinning] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  useEffect(() => {
    if (!spin) return;
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setWinnerIndex((spin - 1) % elements.length);
    }, 2500);
  }, [spin]);
  const notEnoughtElements =
    elements.length < 2 ? (
      <div className="message">
        <div className="message-header">Erreur</div>
        <div className="message-body">
          Veuillez selectionner au moins 2 restaurants
        </div>
      </div>
    ) : null;
  const tooMuchElements =
    elements.length > 50 ? (
      <div className="message">
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
    <div className="columns is-multiline is-centered">
      <div
        className="column is-full is-flex is-justify-content-center is-align-items-center"
        style={{ position: 'relative' }}
      >
        <WheelKnob setSpin={setRandomSpin} />
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
                  className={`wheel-part ${getBackgroundColor(index)}`}
                ></div>
              </div>
            )
          )}
        </div>
      </div>
      <div>{elements[(spin - 1) % elements.length]?.label} a gagné</div>
    </div>
  );
};

export default Wheel;
