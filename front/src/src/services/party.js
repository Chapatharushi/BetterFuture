import { PARTY,CREATE_PARTY,DELETE_PARTY,GET_PARTY,UPDATE_PARTY } from './client/endpoints';
import { Axios } from './client/index';

export const getParties = () => {
  return Axios.get(PARTY);
};
export const deleteParty = (id) => {
  return Axios.delete(`${DELETE_PARTY}/${id}`);
};
export const addParties = (party) => {
  return Axios.post(CREATE_PARTY,party);
};
export const getSingleParty = (id) => {
  return Axios.get(`${GET_PARTY}/${id}`);
};
export const updateParty = (id,party) => {
  return Axios.post(`${UPDATE_PARTY}/${id}`,party);
};
