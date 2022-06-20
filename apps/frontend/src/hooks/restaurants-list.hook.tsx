import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import _ from 'lodash';

export const useRestaurantsList = (restaurants: any[]): [{ label: string; value: string; isChecked: boolean; }[], (value: string) => void] => {
  const [restaurantsList, setRestaurantsList] = useState(restaurants);
  const toggleRestaurant = (value: string) => {
    setRestaurantsList(_.map(restaurantsList, (r) => ({
        ...r,
        isChecked: r.value === value ? !r.isChecked : r.isChecked,
      })),
    );
  }
  useEffect(() => {
    setRestaurantsList(_.map(restaurants, r => {
      return {
        value: r.value || uuidv4(),
        label: r?.['Name']?.title?.[0]?.plain_text,
        isChecked: r.isChecked || false,
      }
    }));
  }, [restaurants]);
  return [restaurantsList, toggleRestaurant];
};
