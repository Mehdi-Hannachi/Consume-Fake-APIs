import {
  GET_POSTS,
  GET_POSTS_FAILED,
  GET_POSTS_SUCCESS,
} from "../actionTypes/actionsTypes";

const initialState = {
  loading: false,
  posts: [],
  error: null,
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, loading: true };
    case GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: payload };
    case GET_POSTS_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
export default postsReducer;
