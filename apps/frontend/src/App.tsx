import React from 'react';
import { useFilters } from './hooks/filters.hook';
import { useSpin } from './hooks/spin.hook';
import { useRestaurants } from './hooks/restaurants.hook';
import { Filter } from './components/Filter';

function App() {
  const [menuFilters, resetFilters] = useFilters();
  const [restaurants, setRestaurants] = useRestaurants();
  const reset = () => {
    // setAreChecked(initialState);
    resetFilters();
  };
  // const elementsWithForm = restaurants.filter((e) => {
  //   return true;
  //     // _.intersection(
  //     //   menuFilters,
  //     //   _.map(
  //     //     _.filter(menuFilters, (d) => d.isChecked),
  //     //     'value'
  //     //   )
  //     // ).length
  // }).map<IRestaurant & ICheckbox>((restaurant, i: number) => ({
  //   ...restaurant,
  //   isChecked: areChecked[i],
  //   setIsChecked: () => {
  //     const areCheckedCloned = _.clone(areChecked);
  //     areCheckedCloned[i] = !areCheckedCloned[i];
  //     setAreChecked(areCheckedCloned);
  //   },
  // }));
  // const checkedElements = elementsWithForm.filter((e) => e.isChecked);
  const [spin, setRandomSpin] = useSpin();
  return (
    <div className="container is-fluid">
      <div className="columns is-multiline">
        <div
          className="column is-full-mobile is-one-third-desktop"
          style={{ marginLeft: '-32px' }}
        >
          {menuFilters.map((f) => (
            <Filter
              name={f.name}
              options={f.options}
            />
          ))}
          {/*<List*/}
          {/*  title="Liste des restaurants"*/}
          {/*  elements={elementsWithForm}*/}
          {/*  costFilter={costFilter}*/}
          {/*  typeFilter={typeFilter}*/}
          {/*  dietFilter={dietFilter}*/}
          {/*  reset={reset}*/}
          {/*></List>*/}
          <div className="panel-block">
            <button
              className="button is-link is-outlined is-fullwidth"
              onClick={() => reset()}
            >
              Reset
            </button>
          </div>
          {/*{!_.isEmpty(elementsWithForm) ? (*/}
          {/*  <div className="panel-block">*/}
          {/*    <button*/}
          {/*      className="button is-primary is-outlined is-fullwidth"*/}
          {/*      onClick={() => setRandomSpin()}*/}
          {/*    >*/}
          {/*      Spin*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*) : null}*/}
        </div>
        <div className="column is-full-mobile is-three-thirds-desktop">
          {/*<SpinningRoulette*/}
          {/*  elements={checkedElements}*/}
          {/*  spin={spin}*/}
          {/*></SpinningRoulette>*/}
        </div>
      </div>
    </div>
  );
}

export default App;
