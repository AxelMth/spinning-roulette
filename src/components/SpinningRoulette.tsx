import React, {useState} from 'react';
import './SpinningRoulette.scss';

interface Props {
  elements: any[]
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
    <div className="columns is-multiline is-centered">
      <div className="column is-flex is-justify-content-center pb-0">
        <i className="fas fa-caret-down fa-3x"></i>
      </div>
      <div className="column is-full is-flex is-justify-content-center p-0"
           style={{ marginTop: -15 }}>
        <div className={`roulette spin-animation-${elements.length}-${spin}`}>
          {elements.map((element: any, index): JSX.Element => (
            <div id={`slice-${elements.length}-${index + 1}`} className="hold">
              <div className={`slice-name-${elements.length}-${index + 1}`}>
                <div className="slice-text">{element.label}</div>
              </div>
              <div className={`roulette-part ${getBackgroundColor(index)}`}></div>
            </div>
          ))}
        </div>
      </div>
      <div className="column is-full mt-3">
        <button className="button is-link is-rounded" onClick={() => {
          setSpin(generateRandomSpin());
        }}>Spin
        </button>
      </div>
    </div>
  );
};

export default SpinningRoulette;
