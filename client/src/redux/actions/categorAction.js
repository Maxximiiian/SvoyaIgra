import { GET_CATEGOR } from '../types/types';

export const getCategor = (data) => ({ type: GET_CATEGOR, payload: data });

export const getCategor_THUNK = () => (dispatch) => {
  fetch('http://localhost:3002/api/posts')
    .then((res) => res.json())
    .then((res) => {
      dispatch(getCategor(res));
    });
};
