import React, {useState} from 'react';

interface Props {
  title: string;
  elements: string[];
}

const List = ({title, elements}: Props) => {
  const [areChecked, setAreChecked] = useState(Array(elements.length).fill(false));
  const elementsWithForm = elements.map((e, i) => {
    return {
      label: e,
      type: 'checkbox',
      isChecked: areChecked[i],
      setIsChecked: () => {
        const areCheckedCloned = JSON.parse(JSON.stringify(areChecked));
        areCheckedCloned[i] = !areCheckedCloned[i];
        setAreChecked(areCheckedCloned);
      }
    }
  });
  return (
    <nav className="panel">
      <p className="panel-heading is-link">
        {title}
      </p>
      {elementsWithForm.map(element => (
        <label className="panel-block">
          <input type={element.type} checked={element.isChecked} onChange={() => element.setIsChecked()} />
          {element.label}
        </label>
      ))}
      <div className="panel-block">
        <button className="button is-link is-outlined is-fullwidth"
                onClick={() => setAreChecked(Array(elements.length).fill(false))}>
          Reset all filters
        </button>
      </div>
    </nav>
  );
};

export default List;
