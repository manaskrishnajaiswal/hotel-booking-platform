import {
  ALL_ROOMS_CREATE,
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/roomConstants";

// All rooms reducer
export const allRoomsReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_ROOMS_CREATE:
      return { loading: true };
    case ALL_ROOMS_SUCCESS:
      return { loading: false, allrooms: action.payload };
    case ALL_ROOMS_FAIL:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};
