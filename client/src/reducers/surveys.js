import * as actions from '../actions/types';

export const surveys = (state = [], { type, payload }) => {
  if (type === actions.FETCH_SURVEYS) {
    return payload;
  }
  return state;
};
