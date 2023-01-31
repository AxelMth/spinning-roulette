import React from 'react';
import _ from 'lodash';
import { useFilters } from './hooks/filters.hook';
import { useRestaurants } from './hooks/restaurants.hook';
import List from './components/List';
import Wheel from './components/Wheel';
import { useRestaurantsList } from './hooks/restaurants-list.hook';

export function App() {
  const [menuFilters, toggleFilterOption, resetFilters] = useFilters();
  const [restaurants] = useRestaurants(menuFilters);
  const [restaurantsList, toggleRestaurant] = useRestaurantsList(restaurants);
  const reset = () => {
    // setAreChecked(initialState);
    resetFilters();
  };
  return (
    <div className="container is-fluid">
      <div className="columns is-multiline">
        <div
          className="column is-full-mobile is-one-third-desktop"
          style={{ marginLeft: '-32px' }}
        >
          <List
            title="Liste des restaurants"
            elements={restaurantsList}
            toggleElement={toggleRestaurant}
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
        </div>
        <div className="column is-full-mobile is-three-thirds-desktop">
          <Wheel
            elements={_.filter(restaurantsList, { isChecked: true })}
          ></Wheel>
        </div>
      </div>
    </div>
  );
}
