import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import List from './components/List';
import SpinningRoulette from './components/SpinningRoulette';
import { IRestaurant, RESTAURANTS } from './constants/restaurants';
import { useFilters } from './hooks/filters.hook';
import { ICheckbox } from './interfaces/form.interface';
import { useSpin } from './hooks/spin.hook';
import { getFilters, getRestaurants } from '@temp-workspace/api-requester';

function App() {
  const initialState = Array(RESTAURANTS.length).fill(true);
  const [areChecked, setAreChecked] = useState(initialState);
  const [costFilter, typeFilter, dietFilter, resetFilters] = useFilters();
  const reset = () => {
    setAreChecked(initialState);
    resetFilters();
  };
  const [restaurants, setRestaurants] = useState([]);
  // @ts-ignore
  useEffect(async () => {
    const restaurants = await getRestaurants();
    setRestaurants(restaurants);
  }, []);
  const [filters, setFilters] = useState([]);
  // @ts-ignore
  useEffect(async () => {
    const filters = await getFilters();
    setFilters(restaurants);
    return () => {};
  }, []);
  const elementsWithForm = RESTAURANTS.filter((e) => {
    return (
      _.intersection(
        e.diets,
        _.map(
          _.filter(dietFilter, (d) => d.isChecked),
          'value'
        )
      ).length &&
      _.intersectionBy(
        e.types,
        _.map(
          _.filter(typeFilter, (rT) => rT.isChecked),
          'value'
        )
      ).length &&
      _.includes(
        _.map(
          _.filter(costFilter, (c) => c.isChecked),
          'value'
        ),
        e.cost
      )
    );
  }).map<IRestaurant & ICheckbox>((restaurant, i: number) => ({
    ...restaurant,
    isChecked: areChecked[i],
    setIsChecked: () => {
      const areCheckedCloned = _.clone(areChecked);
      areCheckedCloned[i] = !areCheckedCloned[i];
      setAreChecked(areCheckedCloned);
    },
  }));
  const checkedElements = elementsWithForm.filter((e) => e.isChecked);
  const [spin, setRandomSpin] = useSpin();
  return (
    <div className="container is-fluid">
      <div className="columns is-multiline">
        <div
          className="column is-full-mobile is-one-third-desktop"
          style={{ marginLeft: '-32px' }}
        >
          <List
            title="Liste des restaurants"
            elements={elementsWithForm}
            costFilter={costFilter}
            typeFilter={typeFilter}
            dietFilter={dietFilter}
            reset={reset}
          ></List>
          <div className="panel-block">
            <button
              className="button is-link is-outlined is-fullwidth"
              onClick={() => reset()}
            >
              Reset
            </button>
          </div>
          {!_.isEmpty(elementsWithForm) ? (
            <div className="panel-block">
              <button
                className="button is-primary is-outlined is-fullwidth"
                onClick={() => setRandomSpin()}
              >
                Spin
              </button>
            </div>
          ) : null}
        </div>
        <div className="column is-full-mobile is-three-thirds-desktop">
          <SpinningRoulette
            elements={checkedElements}
            spin={spin}
          ></SpinningRoulette>
        </div>
      </div>
    </div>
  );
}

export default App;
