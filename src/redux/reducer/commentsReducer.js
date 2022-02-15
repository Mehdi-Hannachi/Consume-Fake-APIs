import {
  GET_COMMENTS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_SUCCESS,
} from "../actionTypes/actionsTypes";

const initialState = {
  loading: false,
  comments: [],
  error: null,
};

const commentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMMENTS:
      return { ...state, loading: true };
    case GET_COMMENTS_SUCCESS:
      return { ...state, loading: false, comments: payload };
    case GET_COMMENTS_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
export default commentsReducer;
