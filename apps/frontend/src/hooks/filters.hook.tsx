import { useEffect, useState } from 'react';
import { ICheckbox } from '../interfaces/form.interface';
import { getFilters } from '@temp-workspace/api-requester';
import _ from 'lodash';

interface IOption extends ICheckbox {
  label: string;
  value: string | number;
}

interface IFilter extends ICheckbox {
  name: string;
  options: IOption[]
}

export const useFilters = (): [IFilter[], () => void] => {
  // Fetch database properties
  const [filters, setFilters] = useState<any[]>([]);
  useEffect(() => {
    async function fetchFilters() {
      const filters = await getFilters();
      setFilters(filters);
    }
    fetchFilters();
  }, []);
  // Get menu filters from database properties
  const [menuFilters, setMenuFilters] = useState<any[]>([]);
  useEffect(() => {
    const menuFilters = _.map(filters, (f) => ({
      ...f,
      options: _.map(f.options, (option) => {
        return {
          label: option.name,
          value: option.name,
        }
      }),
      isChecked: false,
    }));
    setMenuFilters(menuFilters);
  }, [filters])
  const resetFilters = () => {
    setMenuFilters(_.map(menuFilters, (f) => ({
        ...f,
        isChecked: false,
      })),
    );
  };
  return [menuFilters, resetFilters];
};
