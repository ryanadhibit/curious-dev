import * as types from '../types';

export function hospital(state = {}, action) {
  switch (action.type) {
    case types.GET_HOSPITALS_START:
    case types.GET_HOSPITALS_SUCCESS:
    case types.GET_HOSPITALS_FAILURE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
