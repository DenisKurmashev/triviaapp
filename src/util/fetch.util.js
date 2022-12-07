import map from "lodash/map";
import join from "lodash/join";

export function fetchData(endpoint, { query } = {}) {
  // TODO: Move into app .env
  const baseUrl = "https://opentdb.com/api.php";
  const queryUrl = map(query, (value, key) => `${key}=${value}`).join("&");

  const url = join([baseUrl, endpoint, `?${queryUrl}`], "");

  return fetch(url);
}
