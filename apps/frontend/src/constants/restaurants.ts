export enum Type {
  FAST_FOOD = 'Fast food',
  FRENCH = 'Brasserie',
  ASIAN = 'Asiatique',
  ITALIAN = 'Italien',
  GREEK = 'Grec',
  ARABIC = 'Marocain / Tunisien',
}

export enum Diet {
  VEGETARIAN = 'Végétarien',
  VEGAN = 'Végan',
  GLUTEN_FREE = 'Sans gluten',
  HEALTHY = 'Bon pour la santé',
  FAT = 'Gras',
}

export enum Cost {
  CHEAP = 'Bon marché',
  MEDIUM = 'Normal',
  EXPENSIVE = 'Cher',
  HIGHLY_EXPENSIVE = 'Très cher',
}

export interface IRestaurant {
  label: string;
  cost: Cost;
  diets: Diet[];
  types: Type[];
}

export const RESTAURANTS = [
  {
    label: "Macdonald's",
    cost: Cost.CHEAP,
    diets: [Diet.FAT],
    types: [Type.FAST_FOOD],
  },
  {
    label: 'Burger King',
    cost: Cost.CHEAP,
    diets: [Diet.FAT],
    types: [Type.FAST_FOOD],
  },
  {
    label: "O'Tacos",
    cost: Cost.CHEAP,
    diets: [Diet.FAT],
    types: [Type.FAST_FOOD],
  },
  { label: 'Okame', cost: Cost.MEDIUM, diets: [], types: [Type.ASIAN] },
  {
    label: 'Apertivus',
    cost: Cost.MEDIUM,
    diets: [Diet.VEGETARIAN, Diet.HEALTHY],
    types: [Type.ITALIAN],
  },
  {
    label: 'Triumfo',
    cost: Cost.MEDIUM,
    diets: [Diet.VEGETARIAN],
    types: [Type.ITALIAN],
  },
  {
    label: 'Shine Garden',
    cost: Cost.MEDIUM,
    diets: [Diet.VEGETARIAN, Diet.HEALTHY],
    types: [Type.ITALIAN],
  },
  {
    label: 'Laouz',
    cost: Cost.MEDIUM,
    diets: [Diet.VEGETARIAN],
    types: [Type.ARABIC],
  },
  { label: 'Petit Wagram', cost: Cost.MEDIUM, diets: [], types: [Type.FRENCH] },
  {
    label: 'Popote',
    cost: Cost.MEDIUM,
    diets: [Diet.VEGETARIAN, Diet.HEALTHY],
    types: [Type.FRENCH],
  },
  {
    label: 'Naan',
    cost: Cost.MEDIUM,
    diets: [Diet.VEGETARIAN, Diet.HEALTHY],
    types: [Type.FRENCH, Type.ASIAN],
  },
  {
    label: 'Dyonisos',
    cost: Cost.MEDIUM,
    diets: [Diet.VEGETARIAN, Diet.HEALTHY],
    types: [Type.FRENCH],
  },
  {
    label: 'Libanais Sandwich',
    cost: Cost.CHEAP,
    diets: [Diet.VEGETARIAN, Diet.HEALTHY],
    types: [Type.GREEK],
  },
  {
    label: 'Libanais Traiteur',
    cost: Cost.MEDIUM,
    diets: [Diet.VEGETARIAN, Diet.HEALTHY],
    types: [Type.GREEK],
  },
];
