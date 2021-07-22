import React, {useState} from 'react';

interface Props {
  costFilters: any[];
  restaurantTypeFilter: any[];
  dietFilter: any[];
}

const Filters = ({costFilters, restaurantTypeFilter, dietFilter}: Props) => {
  const [isPriceFilterActive, setIsPriceFilterActive] = useState(false);
  const [isTypeFilterActive, setIsTypeFilterActive] = useState(false);
  const [isDietFilterActive, setIsDietFilterActive] = useState(false);
  const resetAllDropdown = () => {
    setIsPriceFilterActive(false);
    setIsTypeFilterActive(false);
    setIsDietFilterActive(false);
  }
  return (
    <div className="is-flex is-justify-content-space-around	py-3">
      <div className={`dropdown ${isPriceFilterActive ? 'is-active' : ''}`}>
        <div className="dropdown-trigger">
          <button className="button is-small"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  onClick={() => {
                    resetAllDropdown();
                    setIsPriceFilterActive(!isPriceFilterActive)
                  }}>
            <i className="fas fa-euro-sign mr-2"></i>Prix
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {costFilters.map(element => (
              <label className="dropdown-item">
                <input type="checkbox" checked={element.isChecked} onChange={() => {
                  element.setIsChecked();
                }} className="mr-2"/>
                <span>{element.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className={`dropdown ${isTypeFilterActive ? 'is-active' : ''}`}>
        <div className="dropdown-trigger">
          <button className="button is-small"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  onClick={() => {
                    resetAllDropdown();
                    setIsTypeFilterActive(!isTypeFilterActive)
                  }}>
            <i className="fas fa-flag mr-2"></i>Type
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {restaurantTypeFilter.map(element => (
              <label className="dropdown-item">
                <input type="checkbox" checked={element.isChecked} onChange={() => {
                  element.setIsChecked();
                }} className="mr-2"/>
                <span>{element.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className={`dropdown ${isDietFilterActive ? 'is-active' : ''}`}>
        <div className="dropdown-trigger">
          <button className="button is-small"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  onClick={() => {
                    resetAllDropdown();
                    setIsDietFilterActive(!isDietFilterActive)
                  }}>
            <i className="fab fa-envira mr-2"></i>Régime alimentaire
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {dietFilter.map(element => (
              <label className="dropdown-item">
                <input type="checkbox" checked={element.isChecked} onChange={() => {
                  element.setIsChecked();
                }} className="mr-2"/>
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
