import React from 'react';
import { IFilter } from '../hooks/filters.hook';

interface Props {
  filter: IFilter;
  toggleFilterOption: (filterName: string, optionValue: string | number) => void;
  filterOptionsDisplayState: boolean;
  toggleFilterOptions: () => void;
  hideAllDropdowns: () => void;
}

export const Filter = ({ filter, toggleFilterOption, filterOptionsDisplayState, toggleFilterOptions, hideAllDropdowns }: Props) => {
  return (
      <div className="column is-narrow">
        <div
          className={`dropdown mr-2 ${filterOptionsDisplayState ? 'is-active' : ''}`}
        >
          <div className="dropdown-trigger">
            <button
              className="button is-small"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              onClick={() => { hideAllDropdowns(); toggleFilterOptions() }}
            >
              { filter.name }
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
                    onChange={() => { toggleFilterOption(filter.name, option.value); }}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};
