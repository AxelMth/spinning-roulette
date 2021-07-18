import React, {useState} from 'react';
import './SpinningRoulette.scss';

interface Props {
  elements: string[]
}

const generateRandomSpin = () => {
  return Math.ceil(Math.random() * 50);
}

const getBackgroundColor = (index: number): string => {
  switch(index % 3) {
    case 0:
      return 'background-blue';
    case 1:
      return 'background-red';
    case 2:
      return 'background-green';
    default:
      return 'background-blue';
  }
}

const SpinningRoulette = ({elements}: Props) => {
  const [spin, setSpin] = useState<number>(0);
  return (
    <>
      <div className="wheel-cursor-container">
        <i className="fas fa-caret-down fa-3x"></i>
      </div>
      <div className="wheel-container">
        <div className={`wheel spin-animation-${elements.length}-${spin}`}>
          {elements.map((element: any, index): JSX.Element => (
            <div id={`pieSlice-${elements.length}-${index + 1}`} className="hold">
              <div className={`slice-name-${elements.length}-${index + 1}`}>
                <div className="slice-text">{element}</div>
              </div>
              <div className={`wheel-part ${getBackgroundColor(index)}`}></div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 is-centered">
        <button className="button is-link is-rounded" onClick={() => {
          setSpin(generateRandomSpin());
        }}>Spin
        </button>
      </div>
    </>
  );
};

export default SpinningRoulette;
