import _ from 'lodash';
import React from 'react';
import Filters from './Filters';

interface Props {
  title: string;
  elements: any[];
  costFilter: any[];
  typeFilter: any[];
  dietFilter: any[];
  reset: () => void;
}

const List = ({
  title,
  elements,
  costFilter,
  typeFilter,
  dietFilter,
  reset,
}: Props) => {
  const listElements = elements.map((element, key) => (
    <label key={key} className="panel-block">
      <input
        className="checkbox"
        type="checkbox"
        checked={element.isChecked}
        onChange={() => element.setIsChecked()}
      />
      {element.label}
    </label>
  ));
  return (
    <nav className="panel is-link is-shadowless">
      <p className="panel-heading is-radiusless">{title}</p>
      <Filters
        costFilter={costFilter}
        typeFilter={typeFilter}
        dietFilter={dietFilter}
      ></Filters>
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
