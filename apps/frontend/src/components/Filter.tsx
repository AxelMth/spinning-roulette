import React from 'react';
import {IFilter} from '../hooks/filters.hook';

interface Props {
  filter: IFilter;
  toggleFilterOption: (filterName: string, optionValue: string | number) => void;
  isActive: boolean;
  openFilterMenu: () => void;
  closeFilterMenu: () => void;
}

export const Filter = ({
                         filter,
                         toggleFilterOption,
                         isActive,
                         openFilterMenu,
                         closeFilterMenu,
                       }: Props) => {
  // const downdropMenuRef = useRef(null);
  // useOutsideClick(downdropMenuRef, function () {
  //   console.log('outOutsideClick', filter, isActive)
  //   if (isActive) closeFilterMenu()
  // });
  const toggleFilterMenu = () => {
    if (isActive) closeFilterMenu()
    else openFilterMenu()
  }
  return (
    <div
      className={`dropdown mr-2 ${isActive ? 'is-active' : ''}`}
    >
      <div className="dropdown-trigger">
        <button
          className="button is-small"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => {
            toggleFilterMenu()
          }}
        >
          {filter.name}
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {filter.options.map((option, index) => (
            <label key={index} className="dropdown-item">
              <input
                className="checkbox mr-2"
                type="checkbox"
                checked={option.isChecked}
                onChange={() => {
                  toggleFilterOption(filter.name, option.value);
                }}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
