import React, {useState} from 'react';
import './App.scss';

function generateRandomSpin() {
  return Math.ceil(Math.random() * 50);
}

function App() {
  const [spin, setSpin] = useState<number>(0);
  const range: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="container">
      <div className="wheel-cursor-container">
        <i className="fas fa-caret-down fa-3x"></i>
      </div>
      <div className="wheel-container">
        <div className={`wheel spin-animation-${spin}`}>
          { range.map((e: any): JSX.Element => (
              <div id={"pieSlice" + e} className="hold">
                <div className={"slice-name" + e}>
                  <div className="slice-text">{ `test${e}` }</div>
                </div>
                <div className={`wheel-part ${(e % 2 === 0) ? "background-blue" : "background-red"}`}>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="mt-3 is-centered">
        <button className="button is-link is-rounded" onClick={() => {
          setSpin(generateRandomSpin());
        }}>Spin</button>
      </div>
    </div>
  );
}

export default App;
