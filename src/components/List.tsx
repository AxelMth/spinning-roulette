import React from 'react';

interface Props {
  title: string;
  elements: any[];
  reset: () => void;
}

const List = ({title, elements, reset}: Props) => {
  return (
    <nav className="panel is-link is-shadowless">
      <p className="panel-heading is-radiusless">
        {title}
      </p>
      {elements.map(element => (
        <label className="panel-block">
          <input type={element.type} checked={element.isChecked} onChange={() => element.setIsChecked()} />
          {element.label}
        </label>
      ))}
      <div className="panel-block">
        <button className="button is-link is-outlined is-fullwidth"
                onClick={() => reset()}>
          Reset
        </button>
      </div>
    </nav>
  );
};

export default List;
