import React, {useState} from 'react';
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
  const intialState = Array(RESTAURANTS.length).fill(true);
  const [areChecked, setAreChecked] = useState(intialState);
  const elementsWithForm = RESTAURANTS.map((e, i) => {
    return {
      label: e,
      type: 'checkbox',
      isChecked: areChecked[i],
      setIsChecked: () => {
        const areCheckedCloned = JSON.parse(JSON.stringify(areChecked));
        areCheckedCloned[i] = !areCheckedCloned[i];
        setAreChecked(areCheckedCloned);
      }
    }
  });
  const checkedElements = elementsWithForm.filter(e => e.isChecked);
  return (
    <div className="columns is-multiline is-centered">
      <div className="column is-one-quarter">
        <List
          title="Liste des restaurants"
          elements={elementsWithForm}
          reset={() => setAreChecked(intialState)}
        ></List>
      </div>
      <div className="column is-three-quarters">
        <SpinningRoulette elements={checkedElements}></SpinningRoulette>
      </div>
    </div>
  );
}

export default App;
