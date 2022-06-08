import { POLICY,CREATE_POLICY,DELETE_POLICY,GET_POLICY,UPDATE_POLICY } from './client/endpoints';
import { Axios } from './client/index';

export const getPolicies = () => {
  return Axios.get(POLICY);
};
export const deletePolicy = (id) => {
  return Axios.delete(`${DELETE_POLICY}/${id}`);
};
export const addPolicies = (policy) => {
  return Axios.post(CREATE_POLICY,policy);
};
export const getSinglePolicy = (id) => {
  return Axios.get(`${GET_POLICY}/${id}`);
};
export const updatePolicies = (id,policy) => {
  return Axios.post(`${UPDATE_POLICY}/${id}`,policy);
};
