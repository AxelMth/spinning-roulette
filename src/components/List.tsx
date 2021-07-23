import React from 'react';
import Filters from './Filters';

interface Props {
  title: string;
  elements: any[];
  costFilters: any[];
  restaurantTypeFilter: any[];
  dietFilter: any[];
  reset: () => void;
}

const List = ({title, elements, costFilters, restaurantTypeFilter, dietFilter, reset}: Props) => {
  return (
    <nav className="panel is-link is-shadowless">
      <p className="panel-heading is-radiusless">
        {title}
      </p>
      <Filters costFilters={costFilters}
               restaurantTypeFilter={restaurantTypeFilter}
               dietFilter={dietFilter}></Filters>
      {elements.map((element, key) => (
        <label key={key} className="panel-block">
          <input type="checkbox" checked={element.isChecked} onChange={() => element.setIsChecked()}/>
          {element.label}
        </label>
      ))}
    </nav>
  );
};

export default List;
