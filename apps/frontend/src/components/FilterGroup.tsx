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
  return <div className="p-1 is-flex is-justify-content-center" style={{flexWrap: 'wrap'}}>
    {filters.map((f, filterIndex) => <Filter
      key={filterIndex}
      filter={f}
      toggleFilterOption={toggleFilterOption}
      isActive={activeFilterName === f.name}
      toggleFilterMenu={() => {
        if (activeFilterName === f.name) setActiveFilterName(null)
        else setActiveFilterName(f.name)
      }}
      closeFilterMenu={() => {
        setActiveFilterName(null)
      }}
    />)}
    <button className={`button is-ghost`} onClick={() => {reset()}}>Réinitialiser</button>
  </div>
};
