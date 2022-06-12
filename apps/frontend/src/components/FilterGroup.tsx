import _ from 'lodash';
import React, { useState } from 'react';
import { IFilter } from '../hooks/filters.hook';
import { Filter } from './Filter';

interface Props {
  filters: IFilter[];
  toggleFilterOption: (filterName: string, optionValue: string | number) => void;
}

export const FilterGroup = ({ filters, toggleFilterOption }: Props) => {
  const [filterOptionsDisplayState, setFilterOptionsDisplayState] = useState<Record<string, { isActive: boolean }>>(_(filters).keyBy('name').mapValues(() => ({
    isActive: false,
  })).value());
  const toggleFilterOptions = (filterName: string) => {
    const newFiltersDisplayState = _.clone(filterOptionsDisplayState);
    newFiltersDisplayState[filterName] = { isActive: !newFiltersDisplayState[filterName]?.isActive || false };
    setFilterOptionsDisplayState(newFiltersDisplayState)
  }
  const hideAllDropdowns = () => {
    let newFiltersDisplayState = _.clone(filterOptionsDisplayState);
    newFiltersDisplayState = _(newFiltersDisplayState).mapValues(() => ({ isActive: false })).value();
    setFilterOptionsDisplayState(newFiltersDisplayState)
  }
  return <>
    {filters.map(f => (
      <Filter
        filter={f}
        toggleFilterOption={toggleFilterOption}
        filterOptionsDisplayState={filterOptionsDisplayState[f.name]?.isActive}
        toggleFilterOptions={() => toggleFilterOptions(f.name)}
        hideAllDropdowns={hideAllDropdowns}
      />
    ))}
  </>
};
