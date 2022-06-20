import axios from "axios";

export async function getFilters() {
  try {
    const response = await axios.get('http://localhost:4000/filters', {
    });
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function getRestaurants() {
  try {
    const response = await axios.get('http://localhost:4000/restaurants', {
    });
    return response.data;
  } catch (error) {
    return [];
  }
}
