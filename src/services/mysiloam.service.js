import Axios from '../helpers/api.helper';
import config from '../configs/env.config';

export const fetchHospitalsService = () => {
  const baseUrl = config.mysiloam.host;
  const endpoint = 'GET_HOSPITALS';
  const params = '?isVaccine=true';
  return Axios.GET(baseUrl, endpoint, params);
};
