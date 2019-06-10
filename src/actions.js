import { CHANGE_SEARCH_FIELD} from "./constatns";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});