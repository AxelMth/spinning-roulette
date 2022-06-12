import React, { useState } from 'react';

interface Props {
  name: string;
  options: {
    label: string;
    value: string | number;
    isChecked: boolean;
    setIsChecked: () => void;
  }[]
}

export const Filter = ({ name, options }: Props) => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const reset = () => {
    setIsFilterActive(false)
  };
  return (
    <div className="column is-full">
      <div
        className={`dropdown mr-2 ${isFilterActive ? 'is-active' : ''}`}
      >
        <div className="dropdown-trigger">
          <button
            className="button is-small"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={() => { setIsFilterActive(true) }}
          >
            { name }
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {options.map((option, index) => (
              <label key={index} className="dropdown-item">
                <input
                  className="checkbox mr-2"
                  type="checkbox"
                  checked={option.isChecked}
                  onChange={() => {
                    option.setIsChecked();
                  }}
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
