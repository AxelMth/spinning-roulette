import React, { useRef } from 'react';
import {IFilter} from '../hooks/filters.hook';
import { useOutsideClick } from '../hooks/useOutsideClick.hook';

interface Props {
  filter: IFilter;
  toggleFilterOption: (filterName: string, optionValue: string | number) => void;
  isActive: boolean;
  toggleFilterMenu: () => void;
  closeFilterMenu: () => void;
}

export const Filter = ({
                         filter,
                         toggleFilterOption,
                         isActive,
                         toggleFilterMenu,
                         closeFilterMenu,
                       }: Props) => {
  const downdropMenuRef = useRef(null);
  const downdropTriggerBtnRef = useRef(null);
  useOutsideClick(downdropMenuRef, () => {
    if (isActive) closeFilterMenu()
  }, { ignoreRefs: [downdropTriggerBtnRef] });
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
          ref={downdropTriggerBtnRef}
        >
          {filter.name}
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content" ref={downdropMenuRef}>
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
