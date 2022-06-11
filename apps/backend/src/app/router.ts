import { filterRoutes } from "./routes/filters.route";
import {restaurantsRoutes} from './routes/restaurants.route';

export const initRoutes = (app) => {
  filterRoutes(app);
  restaurantsRoutes(app);
}
