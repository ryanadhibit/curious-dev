import * as types from '../types';

import { fetchHospitalsService } from '../../services/mysiloam.service';

export function getHospitals() {
  return (dispatch) => {
    new Promise((resolve, reject) => {
      dispatch({
        type: types.GET_HOSPITALS_START,
        payload: {
          status: 'loading',
        },
      });
      fetchHospitalsService()
        .then(({ data }) => {
          dispatch({
            type: types.GET_HOSPITALS_SUCCESS,
            payload: {
              status: 'loaded',
              error: null,
              data: data.data.sort(
                (a, b) => a.hospital_hope_id - b.hospital_hope_id
              ),
            },
          });
          return resolve(data);
        })
        .catch((error) => {
          dispatch({
            type: types.GET_HOSPITALS_FAILURE,
            payload: {
              status: 'loaded',
              error: error.message,
              data: [],
            },
          });
          return reject(error.response);
        });
    });
  };
}
