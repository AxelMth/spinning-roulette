import React from 'react';
import { Cost, Diet, Type } from '../constants/restaurants';
import { useState } from 'react';
import { ICheckbox } from '../interfaces/form.interface';

interface IFilter extends ICheckbox {
  label: string | Array<JSX.Element>;
  value: string;
}

export type Filter = Array<IFilter>;

export const useFilters = (): [Filter, Filter, Filter, () => void] => {
  const costFiltersInitialState = Array(Object.values(Cost).length).fill(true);
  const [costFiltersAreChecked, setCostFiltersAreChecked] = useState(
    costFiltersInitialState
  );
  const costFilter = Object.values(Cost).map((cost: string, index: number) => ({
    label: Array(index + 1).fill(<i className="fas fa-euro-sign"></i>),
    value: cost,
    isChecked: costFiltersAreChecked[index],
    setIsChecked: () => {
      const areCheckedCloned = JSON.parse(
        JSON.stringify(costFiltersAreChecked)
      );
      areCheckedCloned[index] = !areCheckedCloned[index];
      setCostFiltersAreChecked(areCheckedCloned);
    },
  }));
  const typeInitialState = Array(Object.values(Type).length).fill(true);
  const [typeFiltersAreChecked, setRestaurantTypeFiltersAreChecked] =
    useState(typeInitialState);
  const typeFilter = Object.values(Type).map((type: string, index: number) => ({
    label: type,
    value: type,
    isChecked: typeFiltersAreChecked[index],
    setIsChecked: () => {
      const areCheckedCloned = JSON.parse(
        JSON.stringify(typeFiltersAreChecked)
      );
      areCheckedCloned[index] = !areCheckedCloned[index];
      setRestaurantTypeFiltersAreChecked(areCheckedCloned);
    },
  }));
  const dietFilterInitialState = Array(Object.values(Diet).length).fill(true);
  const [dietFiltersAreChecked, setDietFiltersAreChecked] = useState(
    dietFilterInitialState
  );
  const dietFilter = Object.values(Diet).map((diet: string, index: number) => ({
    label: diet,
    value: diet,
    isChecked: dietFiltersAreChecked[index],
    setIsChecked: () => {
      const areCheckedCloned = JSON.parse(
        JSON.stringify(dietFiltersAreChecked)
      );
      areCheckedCloned[index] = !areCheckedCloned[index];
      setDietFiltersAreChecked(areCheckedCloned);
    },
  }));
  const resetFilters = () => {
    setCostFiltersAreChecked(costFiltersInitialState);
    setRestaurantTypeFiltersAreChecked(typeInitialState);
    setDietFiltersAreChecked(dietFilterInitialState);
  };
  return [costFilter, typeFilter, dietFilter, resetFilters];
};
