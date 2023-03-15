import axios from "axios";
import {
  ALL_ROOMS_CREATE,
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
} from "../constants/roomConstants";

// Get all rooms
export const getRoomsAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ROOMS_CREATE });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = axios.get("/api/rooms", config);
    dispatch({ type: ALL_ROOMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_ROOMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
