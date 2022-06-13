import { useEffect, useState } from 'react';
import { getRestaurants } from '@temp-workspace/api-requester';
import { IFilter } from './filters.hook';
import _ from 'lodash';

export const useRestaurants = (menuFilters: IFilter[]): [any[]] => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    async function fetchRestaurants() {
      const restaurants = await getRestaurants();
      setRestaurants(restaurants);
    }
    fetchRestaurants();
  }, []);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    const filteredRestaurants = _.filter(restaurants, (r) => {
      const activeFilters = _.filter(menuFilters, f => _.some(f.options, o => o.isChecked));
      if (!activeFilters.length) return true;
      return _.reduce<IFilter, boolean>(activeFilters, (doMatchFilters, f) => {
        const property = r?.[f.name];
        if (!property) return doMatchFilters;
        const checkedOptions = _.filter(f.options, { isChecked: true });
        // @ts-ignore
        switch (property.type) {
          case 'select':
            // @ts-ignore
            return _.some(checkedOptions, o => o.value === property?.select?.name);
          case 'multi_select':
            // @ts-ignore
            return !!_.intersectionBy(_.map(checkedOptions, o => ({ name: o.value })), property.multi_select, 'name')?.length;
        }
        return doMatchFilters;
      }, true)
    });
    setFilteredRestaurants(filteredRestaurants);
  }, [restaurants, menuFilters]);
  return [filteredRestaurants];
};
