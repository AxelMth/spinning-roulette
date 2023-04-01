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
    resetFilters();
  };
  return (
    <div className="container is-fluid is-marginless is-paddingless">
      <div className="columns is-multiline">
        <div
          className="column is-full-mobile is-one-third-tablet"
        >
          <List
            title="Liste des restaurants"
            elements={restaurantsList}
            toggleElement={toggleRestaurant}
            reset={reset}
            filters={menuFilters}
            toggleFilterOption={toggleFilterOption}
          ></List>
        </div>
        <div className="column is-full-mobile is-three-thirds-desktop mt-6">
          <Wheel
            elements={_.filter(restaurantsList, { isChecked: true })}
          ></Wheel>
        </div>
      </div>
    </div>
  );
}
