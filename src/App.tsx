import React from 'react';
import List from './components/List';
import SpinningRoulette from './components/SpinningRoulette';

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
  return (
    <div className="is-flex" style={{ alignItems: 'stretch' }}>
      <div style={{ width: '30%', height: '100%' }}>
        <List title="Liste des restaurants" elements={RESTAURANTS}></List>
      </div>
      <SpinningRoulette elements={RESTAURANTS}></SpinningRoulette>
    </div>
  );
}

export default App;
