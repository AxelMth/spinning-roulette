import _ from 'lodash';
import React from 'react';
import {IFilter} from '../hooks/filters.hook';
import {FilterGroup} from './FilterGroup';

interface Props<T> {
  title: string;
  elements: T[];
  reset: () => void;
  filters: IFilter[];
  toggleFilterOption: (filterName: string, optionValue: string | number) => void;
}

const List = ({
  title,
  elements,
  reset,
  filters,
  toggleFilterOption,
}: Props<any>) => {
  const listElements = elements.map((element, key) => (
    <label key={key} className="panel-block">
      <input
        className="checkbox"
        type="checkbox"
        checked={element.isChecked}
        onChange={() => element.setIsChecked()}
      />
      {element?.['Name']?.title?.[0]?.plain_text}
    </label>
  ));
  return (
    <nav className="panel is-link is-shadowless">
      <p className="panel-heading is-radiusless">{title}</p>
      <FilterGroup
        filters={filters}
        toggleFilterOption={toggleFilterOption}
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
