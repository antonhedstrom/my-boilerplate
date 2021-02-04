import axios from 'axios';

// User
export function getUser(id) {
  return axios.get(`/api/user/${id}`);
}
export function getUsers(params) {
  return axios.get('/api/user', {
    params,
  });
}
export function createUser(data) {
  return axios.post('/api/user', data);
}
export function updateUser(data) {
  const { id, ...values } = data;
  return axios.patch(`/api/user/${id}`, values);
}
export function removeUser(id) {
  return axios.delete(`/api/user/${id}`);
}

// Book
export function getBook(id) {
  return axios.get(`/api/book/${id}`);
}
export function getBooks(params) {
  return axios.get('/api/book', {
    params,
  });
}
export function createBook(data) {
  return axios.post('/api/book', data);
}
export function updateBook(data) {
  const { id, ...values } = data;
  return axios.patch(`/api/book/${id}`, values);
}
export function removeBook(id) {
  return axios.delete(`/api/book/${id}`);
}
