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
  const toggleFilterOptions = (filterName: string): void => {
    console.log("toggleFilterOptions", filterName);
    setFilterOptionsDisplayState({
      ...filterOptionsDisplayState,
      [filterName]: { isActive: !filterOptionsDisplayState[filterName]?.isActive || false }
    });
  }
  const closeFilterOptions = (filterName: string): void => {
    console.log("closeFilterOptions", filterName);
    setFilterOptionsDisplayState({
      ...filterOptionsDisplayState,
      [filterName]: { isActive: false }
    });
  }
  const clickOutsideMenu = (filterName: string): void => {
    console.log('clickOutsideMenu', filterName)
  }
  return <div className="p-1" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    {filters.map((f) => (
      <Filter
        key={f.name}
        filter={f}
        toggleFilterOption={toggleFilterOption}
        filterOptionsDisplayState={filterOptionsDisplayState[f.name]?.isActive}
        toggleFilterOptions={() => toggleFilterOptions(f.name)}
        closeFilterOptions={() => closeFilterOptions(f.name)}
        clickOutsideMenu={() => clickOutsideMenu(f.name)}
      />
    ))}
  </div>
};
