import { useEffect, useState } from 'react';
import { getRestaurants } from '@temp-workspace/api-requester';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    async function fetchRestaurants() {
      const restaurants = await getRestaurants();
      setRestaurants(restaurants);
    }
    fetchRestaurants();
  }, []);
  return [restaurants, setRestaurants];
};
