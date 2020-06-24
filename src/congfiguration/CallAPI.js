const axios = require("axios");

export function UserDetails(data) {
  return axios({
    method: "POST",
    url: "http://localhost:3000/userLogin",
    data: data,
  });
}
export function PostBlogs(data) {
  return axios({
    method: "POST",
    url: "http://localhost:3000/PostBlog",
    data: data,
  });
}
export function getALlBlogs(data) {
  return axios({
    method: "get",
    url: "http://localhost:3000/getAllBlog",
  });
}

export function DeletePost(data) {
  return axios({
    method: "delete",
    url: "http://localhost:3000/DeleteBlog/" + data.EMAIL,
  });
}

export function EditPost(data) {
  return axios({
    method: "get",
    url: "http://localhost:3000/EditBlog/" + data.EMAIL,
  });
}
export function login(data) {
  return axios({
    method: "POST",
    url: "http://localhost:3000/CheckLogin",
    data: data,
  });
}
