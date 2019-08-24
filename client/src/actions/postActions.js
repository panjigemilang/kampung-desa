import axios from "axios"
import {
  ADD_POST,
  GET_ERRORS,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST,
  CLEAR_ERRORS,
  GET_POST
} from "./types"

const baseURL = "http://localhost:5000"

// adding a post
export const addPost = (postData, config, history) => dispatch => {
  dispatch(clearErrors())
  axios
    .post("/api/posts", postData, config)
    .then(res => {
      alert("Berhasil menambahkan post!")
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
      history.push("/berita")
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// adding a thumbnail
export const addThumbnail = postData => dispatch => {
  dispatch(clearErrors())
  axios
    .post("/", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// get all post
export const getPosts = () => dispatch => {
  dispatch(setPostLoading())
  axios
    .get("/api/posts")
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    )
}

// get post by id
export const getPost = id => dispatch => {
  dispatch(setPostLoading())
  axios
    .get(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    )
}

// delete post
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const deleteImage = filename => dispatch =>
  axios
    .delete(`${baseURL}/files/${filename}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: filename
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )

export const setPostLoading = () => {
  return {
    type: POST_LOADING
  }
}

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}
