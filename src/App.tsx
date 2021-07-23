import React, {useState} from 'react';
import _ from 'lodash';
import List from './components/List';
import SpinningRoulette from './components/SpinningRoulette';
import {Cost, Diet, RESTAURANTS, RestaurantType} from './constants/restaurants';

function App() {
  const initialState = Array(RESTAURANTS.length).fill(true);
  const [areChecked, setAreChecked] = useState(initialState);
  const costFiltersInitialState = Array(Object.values(Cost).length).fill(true);
  const [costFiltersAreChecked, setCostFiltersAreChecked] = useState(costFiltersInitialState);
  const costFilters = Object.values(Cost).map((cost: string, index: number) => ({
    label: Array(index + 1).fill(<i className="fas fa-euro-sign"></i>),
    value: cost,
    isChecked: costFiltersAreChecked[index],
    setIsChecked: () => {
      const areCheckedCloned = JSON.parse(JSON.stringify(costFiltersAreChecked));
      areCheckedCloned[index] = !areCheckedCloned[index];
      setCostFiltersAreChecked(areCheckedCloned);
    },
  }));
  const restaurantTypeInitialState = Array(Object.values(RestaurantType).length).fill(true);
  const [restaurantTypeFiltersAreChecked, setRestaurantTypeFiltersAreChecked] = useState(restaurantTypeInitialState);
  const restaurantTypeFilter = Object.values(RestaurantType).map((type: string, index: number) => ({
    label: type,
    value: type,
    isChecked: restaurantTypeFiltersAreChecked[index],
    setIsChecked: () => {
      const areCheckedCloned = JSON.parse(JSON.stringify(restaurantTypeFiltersAreChecked));
      areCheckedCloned[index] = !areCheckedCloned[index];
      setRestaurantTypeFiltersAreChecked(areCheckedCloned);
    },
  }));
  const dietFilterInitialState = Array(Object.values(Diet).length).fill(true);
  const [dietFiltersAreChecked, setDietFiltersAreChecked] = useState(dietFilterInitialState);
  const dietFilter = Object.values(Diet).map((diet: string, index: number) => ({
    label: diet,
    value: diet,
    isChecked: dietFiltersAreChecked[index],
    setIsChecked: () => {
      const areCheckedCloned = JSON.parse(JSON.stringify(dietFiltersAreChecked));
      areCheckedCloned[index] = !areCheckedCloned[index];
      setDietFiltersAreChecked(areCheckedCloned);
    },
  }));
  const elementsWithForm = RESTAURANTS.filter(e => {
    return _.intersection(e.diets, _.map(_.filter(dietFilter, d => d.isChecked), 'value')).length &&
      _.intersectionBy(e.types, _.map(_.filter(restaurantTypeFilter, rT => rT.isChecked), 'value')).length &&
      _.includes(_.map(_.filter(costFilters, c => c.isChecked), 'value'), e.cost)
  }).map((e, i) => {
    return {
      ...e,
      isChecked: areChecked[i],
      setIsChecked: () => {
        const areCheckedCloned = JSON.parse(JSON.stringify(areChecked));
        areCheckedCloned[i] = !areCheckedCloned[i];
        setAreChecked(areCheckedCloned);
      },
    }
  });
  const reset = () =>{
    setAreChecked(initialState);
    setCostFiltersAreChecked(costFiltersInitialState);
    setRestaurantTypeFiltersAreChecked(restaurantTypeInitialState);
    setDietFiltersAreChecked(dietFilterInitialState);
  }
  const checkedElements = elementsWithForm.filter(e => e.isChecked);
  const [spin, setSpin] = useState<number>(0);
  const generateRandomSpin = () => {
    return Math.ceil(Math.random() * 50);
  }
  return (
    <div className="columns is-multiline is-centered">
      <div className="column is-one-quarter">
        <List
          title="Liste des restaurants"
          elements={elementsWithForm}
          costFilters={costFilters}
          restaurantTypeFilter={restaurantTypeFilter}
          dietFilter={dietFilter}
          reset={reset}
        ></List>
        <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth"
                  onClick={() => reset()}>
            Reset
          </button>
        </div>
        <div className="panel-block">
          <button className="button is-primary is-outlined is-fullwidth"
                  onClick={() => setSpin(generateRandomSpin())}>
            Spin
          </button>
        </div>
      </div>
      <div className="column is-three-quarters">
        <SpinningRoulette elements={checkedElements} spin={spin}></SpinningRoulette>
      </div>
    </div>
  );
}

export default App;
