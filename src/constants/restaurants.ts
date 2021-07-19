export enum RestaurantType {
  FAST_FOOD = 'Fast food',
  FRENCH = 'Brasserie',
  ASIAN = 'Asiatique',
  ITALIAN = 'Italien',
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
  CHEAP = "Bon marché",
  MEDIUM = "Normal",
  EXPENSIVE = "Cher",
  HIGHLY_EXPENSIVE = "Très cher"
}

export const RESTAURANTS = [
  {label: 'Macdonald\'s', cost: Cost.CHEAP, diets: [Diet.FAT], types: [RestaurantType.FAST_FOOD]},
  {label: 'Burger King', cost: Cost.CHEAP, diets: [Diet.FAT], types: [RestaurantType.FAST_FOOD]},
  {label: 'O\'Tacos', cost: Cost.CHEAP, diets: [Diet.FAT], types: [RestaurantType.FAST_FOOD]},
  {label: 'Okame', cost: Cost.MEDIUM, diets: [], types: [RestaurantType.ASIAN]},
  {label: 'Apertivus', cost: Cost.MEDIUM, diets: [Diet.VEGETARIAN, Diet.HEALTHY], types: [RestaurantType.ITALIAN]},
  {label: 'Triumfo', cost: Cost.MEDIUM, diets: [Diet.VEGETARIAN], types: [RestaurantType.ITALIAN]},
  {label: 'Shine Garden', cost: Cost.MEDIUM, diets: [Diet.VEGETARIAN, Diet.HEALTHY], types: [RestaurantType.ITALIAN]},
  {label: 'Laouz', cost: Cost.MEDIUM, diets: [Diet.VEGETARIAN], types: [RestaurantType.ARABIC]},
  {label: 'Petit Wagram', cost: Cost.MEDIUM, diets: [], types: [RestaurantType.FRENCH]},
  {label: 'Popote', cost: Cost.MEDIUM, diets: [Diet.VEGETARIAN, Diet.HEALTHY], types: [RestaurantType.FRENCH]},
  {label: 'Naan', cost: Cost.MEDIUM, diets: [Diet.VEGETARIAN, Diet.HEALTHY], types: [RestaurantType.FRENCH, RestaurantType.ASIAN]},
];
