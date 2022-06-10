import React, { useState } from 'react';
import { Filter } from '../hooks/filters.hook';

interface Props {
  costFilter: Filter;
  typeFilter: Filter;
  dietFilter: Filter;
}

const Filters = ({ costFilter, typeFilter, dietFilter }: Props) => {
  const [isPriceFilterActive, setIsPriceFilterActive] = useState(false);
  const [isTypeFilterActive, setIsTypeFilterActive] = useState(false);
  const [isDietFilterActive, setIsDietFilterActive] = useState(false);
  const resetAllDropdown = () => {
    setIsPriceFilterActive(false);
    setIsTypeFilterActive(false);
    setIsDietFilterActive(false);
  };
  return (
    <div className="column is-full">
      <div className={`dropdown mr-2 ${isPriceFilterActive ? 'is-active' : ''}`}>
        <div className="dropdown-trigger">
          <button
            className="button is-small"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={() => {
              resetAllDropdown();
              setIsPriceFilterActive(!isPriceFilterActive);
            }}
          >
            <i className="fas fa-euro-sign mr-2"></i>Prix
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {costFilter.map((element, index) => (
              <label key={index} className="dropdown-item">
                <input
                  className="checkbox mr-2"
                  type="checkbox"
                  checked={element.isChecked}
                  onChange={() => {
                    element.setIsChecked();
                  }}
                />
                <span>{element.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className={`dropdown mr-2 ${isTypeFilterActive ? 'is-active' : ''}`}>
        <div className="dropdown-trigger">
          <button
            className="button is-small"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={() => {
              resetAllDropdown();
              setIsTypeFilterActive(!isTypeFilterActive);
            }}
          >
            <i className="fas fa-flag mr-2"></i>Type
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {typeFilter.map((element, index) => (
              <label key={index} className="dropdown-item">
                <input
                  className="checkbox mr-2"
                  type="checkbox"
                  checked={element.isChecked}
                  onChange={() => {
                    element.setIsChecked();
                  }}
                />
                <span>{element.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className={`dropdown ${isDietFilterActive ? 'is-active' : ''}`}>
        <div className="dropdown-trigger">
          <button
            className="button is-small"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={() => {
              resetAllDropdown();
              setIsDietFilterActive(!isDietFilterActive);
            }}
          >
            <i className="fab fa-envira mr-2"></i>Régime alimentaire
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {dietFilter.map((element, index) => (
              <label key={index} className="dropdown-item">
                <input
                  className="checkbox mr-2"
                  type="checkbox"
                  checked={element.isChecked}
                  onChange={() => {
                    element.setIsChecked();
                  }}
                />
                <span>{element.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
