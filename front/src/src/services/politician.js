import { POLITICIAN,CREATE_POLITICIAN,DELETE_POLITICIAN,GET_POLITICIAN,UPDATE_POLITICIAN } from './client/endpoints';
import { Axios } from './client/index';

export const getPoliticians = () => {
  return Axios.get(POLITICIAN);
};
export const deletePolitician = (id) => {
  return Axios.delete(`${DELETE_POLITICIAN}/${id}`);
};
export const addPoliticians = (politician) => {
  return Axios.post(CREATE_POLITICIAN,politician);
};
export const getSinglePolitician = (id) => {
  return Axios.get(`${GET_POLITICIAN}/${id}`);
};
export const updatePoliticians = (id,politician) => {
  return Axios.post(`${UPDATE_POLITICIAN}/${id}`,politician);
};
