import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_REQUEST,
  ALL_ROOMS_SUCCESS,
  CLEAR_ERRORS,
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_REQUEST,
  ROOM_DETAILS_RESET,
  ROOM_DETAILS_SUCCESS,
} from "../constants/roomConstants";

// All rooms reducer
export const allRoomsReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_ROOMS_REQUEST:
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

// Room details reducer
export const roomDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ROOM_DETAILS_REQUEST:
      return { loading: true };
    case ROOM_DETAILS_SUCCESS:
      return { loading: false, roomdetails: action.payload };
    case ROOM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case ROOM_DETAILS_RESET:
      return {};
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};
