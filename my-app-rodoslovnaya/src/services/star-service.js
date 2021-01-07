import http from "./http-common";

const API_URL = "http://localhost:8080/api";

const getAll = () => {
  return http.get("/stars");
};

const get = id => {
  return http.get(`/stars/${id}`);
};

const create = data => {
  return http.post("/stars", data);
};

const update = (id, data) => {
  return http.put(`/stars/${id}`, data);
};

const remove = id => {
  return http.delete(`/stars/${id}`);
};

const removeAll = () => {
  return http.delete(`/stars`);
};

const findByTitle = title => {
  return http.get(`/stars?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};