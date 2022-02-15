import axios from "axios";
import {
  GET_COMMENTS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_SUCCESS,
  GET_POSTS,
  GET_POSTS_FAILED,
  GET_POSTS_SUCCESS,
  GET_USERS,
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
} from "../actionTypes/actionsTypes";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USERS_FAILED, payload: error.response.data });
  }
};
export const getPosts = (userId) => async (dispatch) => {
  dispatch({ type: GET_POSTS });
  try {
    // https://jsonplaceholder.typicode.com/posts/?userId=1
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`
    );
    dispatch({ type: GET_POSTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_POSTS_FAILED, payload: error.response.data });
  }
};

export const getComments = (postId) => async (dispatch) => {
  dispatch({ type: GET_COMMENTS });
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    dispatch({ type: GET_COMMENTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_COMMENTS_FAILED, payload: error.response.data });
  }
};
