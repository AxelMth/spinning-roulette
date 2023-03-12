import React, {useRef} from 'react';
import {IFilter} from '../hooks/filters.hook';
import { useOutsideClick } from '../hooks/useOutsideClick.hook';

interface Props {
  filter: IFilter;
  toggleFilterOption: (filterName: string, optionValue: string | number) => void;
  filterOptionsDisplayState: boolean;
  toggleFilterOptions: () => void;
  closeFilterOptions: () => void;
  clickOutsideMenu: () => void;
}

export const Filter = ({
                         filter,
                         toggleFilterOption,
                         filterOptionsDisplayState,
                         toggleFilterOptions,
                         closeFilterOptions,
                         clickOutsideMenu,
                       }: Props) => {
  const downdropMenuRef = useRef(null);
  useOutsideClick(downdropMenuRef, () => {
    clickOutsideMenu()
  });
  return (
    <div
      className={`dropdown mr-2 ${filterOptionsDisplayState ? 'is-active' : ''}`}
    >
      <div className="dropdown-trigger">
        <button
          className="button is-small"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => {
            toggleFilterOptions()
          }}
        >
          {filter.name}
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu" ref={downdropMenuRef}>
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
