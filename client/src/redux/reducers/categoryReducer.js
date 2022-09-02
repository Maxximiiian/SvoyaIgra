/* eslint-disable default-param-last */
import {
  GET_CATEGOR
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGOR:
      return payload;

    default:
      return state;
  }
};
