import _ from 'lodash';
import React from 'react';
import {IFilter} from '../hooks/filters.hook';
import {FilterGroup} from './FilterGroup';

interface Props {
  title: string;
  elements: { label: string, value: string, isChecked: boolean }[];
  toggleElement: (value: string) => void;
  reset: () => void;
  filters: IFilter[];
  toggleFilterOption: (filterName: string, optionValue: string | number) => void;
}

const List = ({
  title,
  elements,
  toggleElement,
  reset,
  filters,
  toggleFilterOption,
}: Props) => {
  const listElements = elements.map((element, key) => (
    <label key={key} className="panel-block">
      <input
        className="checkbox"
        type="checkbox"
        checked={element.isChecked}
        onChange={() => toggleElement(element.value)}
      />
      {element.label}
    </label>
  ));
  return (
    <nav className="panel is-link is-shadowless">
      <p className="panel-heading is-radiusless">{title}</p>
      <FilterGroup
        filters={filters}
        toggleFilterOption={toggleFilterOption}
        reset={reset}
      />
      {_.isEmpty(elements) ? (
        <div className="p-2">
          <div className="notification is-primary is-light">
            Aucun résultat ne correspond à votre recherche.
          </div>
        </div>
      ) : (
        listElements
      )}
    </nav>
  );
};

export default List;
