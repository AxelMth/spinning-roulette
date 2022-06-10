import React from 'react';
import './SpinningRoulette.scss';
import {IRestaurant} from '../constants/restaurants';

interface Props {
  elements: Array<IRestaurant>;
  spin: number;
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

const SpinningRoulette = ({elements, spin}: Props) => {
  return elements.length < 2 ?
    <div className="message">
      <div className="message-header">Erreur</div>
      <div className="message-body">
        Veuillez selectionner au moins 2 restaurants
      </div>
    </div>
    :
    <div className="columns is-multiline is-centered">
      <div className="column is-flex is-justify-content-center pb-0">
        <i className="fas fa-caret-down fa-3x"></i>
      </div>
      <div className="column is-full is-flex is-justify-content-center p-0" style={{marginTop: -15}}>
        <div className={`roulette spin-animation-${elements.length}-${spin}`}>
          {elements.map(
            (element: any, index: number): JSX.Element => (
              <div id={`slice-${elements.length}-${index + 1}`} key={index} className="hold">
                <div className={`slice-name-${elements.length}-${index + 1}`}>
                  <div className="slice-text">{element.label}</div>
                </div>
                <div className={`roulette-part ${getBackgroundColor(index)}`}></div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>;
};

export default SpinningRoulette;
