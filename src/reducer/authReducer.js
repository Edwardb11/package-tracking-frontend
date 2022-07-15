import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      console.log(action)
      return action.payload;
    case types.logout:
      return {};
    default:
      return state;
  }
};
