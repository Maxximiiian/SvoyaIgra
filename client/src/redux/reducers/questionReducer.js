/* eslint-disable default-param-last */
import {
  GET_QUEST
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_QUEST:
      return payload;

    default:
      return state;
  }
};
