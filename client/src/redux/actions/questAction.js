import { GET_QUEST } from '../types/types';

export const getQuest = (data) => ({ type: GET_QUEST, payload: data });

export const getquest_THUNK = () => (dispatch) => {
  fetch('http://localhost:3002/api/posts')
    .then((res) => res.json())
    .then((res) => {
      dispatch(getQuest(res));
    });
};
