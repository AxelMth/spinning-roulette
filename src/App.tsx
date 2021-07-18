import React, {useState} from 'react';
import List from './components/List';
import SpinningRoulette from './components/SpinningRoulette';
import { RESTAURANTS } from './constants/restaurants';

function App() {
  const initialState = Array(RESTAURANTS.length).fill(true);
  const [areChecked, setAreChecked] = useState(initialState);
  const elementsWithForm = RESTAURANTS.map((e, i) => {
    return {
      ...e,
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
          reset={() => setAreChecked(initialState)}
        ></List>
      </div>
      <div className="column is-three-quarters">
        <SpinningRoulette elements={checkedElements}></SpinningRoulette>
      </div>
    </div>
  );
}

export default App;
