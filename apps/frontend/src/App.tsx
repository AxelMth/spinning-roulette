import React from 'react';
import _ from 'lodash';
import { useFilters } from './hooks/filters.hook';
import { useRestaurants } from './hooks/restaurants.hook';
import List from './components/List';
import Wheel from './components/Wheel';
import { useRestaurantsList } from './hooks/restaurants-list.hook';
import './App.scss'

export function App() {
  const [menuFilters, toggleFilterOption, resetFilters] = useFilters();
  const [restaurants] = useRestaurants(menuFilters);
  const [restaurantsList, toggleRestaurant] = useRestaurantsList(restaurants);
  const reset = () => {
    resetFilters();
  };
  return (
    <div className="container is-fluid is-paddingless">
      <aside className="aside-menu">
        <List
          title="Liste des restaurants"
          elements={restaurantsList}
          toggleElement={toggleRestaurant}
          reset={reset}
          filters={menuFilters}
          toggleFilterOption={toggleFilterOption}
        ></List>
      </aside>
      <main className="main-content">
        <Wheel
          elements={_.filter(restaurantsList, { isChecked: true })}
        ></Wheel>
      </main>
    </div>
  );
}
