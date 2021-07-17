import React, {useState} from 'react';
import './App.scss';

function generateRandomSpin() {
  return Math.ceil(Math.random() * 50);
}

const RESTAURANTS = [
  'Macdonald',
  'Burger King',
  'O\'Tacos',
  'Okame',
  'Apertivus',
  'Shine Garden',
  'Triumfo',
  'Laouz',
  'Petit Wagram',
];

function App() {
  const [spin, setSpin] = useState<number>(0);
  return (
    <>
      {RESTAURANTS.map((restaurant: any): JSX.Element => <div>{restaurant}</div>)}
      <div className="container">
        <div className="wheel-cursor-container">
          <i className="fas fa-caret-down fa-3x"></i>
        </div>
        <div className="wheel-container">
          <div className={`wheel spin-animation-${RESTAURANTS.length}-${spin}`}>
            {RESTAURANTS.map((restaurant: any, index): JSX.Element => (
              <div id={`pieSlice-${RESTAURANTS.length}-${index + 1}`} className="hold">
                <div className={`slice-name-${RESTAURANTS.length}-${index + 1}`}>
                  <div className="slice-text">{restaurant}</div>
                </div>
                <div className={`wheel-part ${(index % 2 === 0) ? 'background-blue' : 'background-red'}`}>
                </div>
              </div>
            ))
            }
          </div>
        </div>
        <div className="mt-3 is-centered">
          <button className="button is-link is-rounded" onClick={() => {
            setSpin(generateRandomSpin());
          }}>Spin
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
