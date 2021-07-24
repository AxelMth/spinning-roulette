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

const List = ({title, elements, costFilter, typeFilter, dietFilter, reset}: Props) => {
  return (
    <nav className="panel is-link is-shadowless">
      <p className="panel-heading is-radiusless">
        {title}
      </p>
      <Filters costFilter={costFilter}
               typeFilter={typeFilter}
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
