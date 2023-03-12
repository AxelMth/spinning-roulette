import React, {useState} from 'react';
import {IFilter} from '../hooks/filters.hook';
import {Filter} from './Filter';

interface Props {
  filters: IFilter[];
  toggleFilterOption: (filterName: string, optionValue: string | number) => void;
  reset: () => void;
}

export const FilterGroup = ({filters, toggleFilterOption, reset}: Props) => {
  const [activeFilterName, setActiveFilterName] = useState<string | null>(null);
  return <div className="p-1" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
    {filters.map((f) => <Filter
      key={f.name}
      filter={f}
      toggleFilterOption={toggleFilterOption}
      isActive={activeFilterName === f.name}
      openFilterMenu={() => {
        setActiveFilterName(f.name);
      }}
      closeFilterMenu={() => {
        setActiveFilterName(null)
      }}
    />)}
    <button className={`button is-ghost`} onClick={() => {reset()}}>Réinitialiser</button>
  </div>
};
