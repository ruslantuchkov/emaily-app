import * as actions from '../actions/types';

export const auth = (state = null, { type, payload }) => {
  if (type === actions.FETCH_USER) {
    return payload || false;
  }
  return state;
};
