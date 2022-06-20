import React from 'react';
import { useFilters } from './hooks/filters.hook';
import { useSpin } from './hooks/spin.hook';
import { useRestaurants } from './hooks/restaurants.hook';
import _ from 'lodash';
import List from './components/List';
import SpinningRoulette from './components/SpinningRoulette';

export function App() {
  const [menuFilters, toggleFilterOption, resetFilters] = useFilters();
  const [restaurants] = useRestaurants(menuFilters);
  const reset = () => {
    // setAreChecked(initialState);
    resetFilters();
  };
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
            elements={restaurants}
            reset={reset}
            filters={menuFilters}
            toggleFilterOption={toggleFilterOption}
          ></List>
          <div className="panel-block">
            <button
              className="button is-link is-outlined is-fullwidth"
              onClick={() => reset()}
            >
              Reset
            </button>
          </div>
          {!_.isEmpty(restaurants) ? (
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
            elements={restaurants}
            spin={spin}
          ></SpinningRoulette>
        </div>
      </div>
    </div>
  );
}
