import axios from "axios";
import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_REQUEST,
  ALL_ROOMS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/roomConstants";
import absoluteUrl from "next-absolute-url";

// Get all rooms
export const getRoomsAction = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    dispatch({ type: ALL_ROOMS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${origin}/api/rooms`, config);
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

// Get room details
export const getRoomDetailsAction = (req, roomId) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    dispatch({ type: ROOM_DETAILS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${origin}/api/rooms/${roomId}`, config);
    dispatch({ type: ROOM_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
