import { useEffect, useState } from 'react';
import { ICheckbox } from '../interfaces/form.interface';
import { getFilters } from '@temp-workspace/api-requester';
import _ from 'lodash';

interface IOption extends ICheckbox {
  label: string;
  value: string | number;
}

export interface IFilter {
  name: string;
  options: IOption[]
}

export const useFilters = (): [IFilter[], (filterName: string, optionValue: string | number) => void, () => void] => {
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
  const [menuFilters, setMenuFilters] = useState<IFilter[]>([]);
  useEffect(() => {
    const menuFilters = _.map(filters, (f) => ({
      ...f,
      options: _.map(f.options, (option) => {
        return {
          label: option.name,
          value: option.name,
          isChecked: false,
        }
      }),
    }));
    setMenuFilters(menuFilters);
  }, [filters])
  const resetFilters = () => {
    setMenuFilters(_.map(menuFilters, (f) => ({
        ...f,
        options: _.map(f.options, (option) => {
          return {
            ...option,
            isChecked: false,
          }
        })
      }))
    );
  };
  const toggleFilterOption = (filterName: string, optionValue: string | number) => {
    setMenuFilters(_.map(menuFilters, f => ({
      ...f,
      options: _.map(f.options, o => ({
        ...o,
        isChecked: f.name === filterName && optionValue === o.value ? !o.isChecked : o.isChecked
      }))
    })))
  }
  return [menuFilters, toggleFilterOption, resetFilters];
};
