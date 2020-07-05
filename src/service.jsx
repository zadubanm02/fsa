import axios from "axios";

export const getPosts = () => {
  axios.get("http://localhost:8000/").then((response) => {
    return response;
  });
};

export const getOne = (id) => {
  axios.get(`http://localhost:8000/${id}`).then((response) => {
    return response;
  });
};

export const deletePost = (id) => {
  axios.delete(`http://localhost:8000/${id}`).then((response) => {
    console.log("deleted post with id: " + id);
  });
};

export const addPost = () => {
  axios.post("http://localhost:8000/").then((response) => {
    console.log("Successfully added post");
    return response;
  });
};
