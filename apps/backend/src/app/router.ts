import { filterRoutes } from "./routes/filters.route";

export const initRoutes = (app) => {
  filterRoutes(app);
}
