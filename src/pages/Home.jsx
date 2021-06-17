import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// actions
import { getHospitals } from '../stores/actions';

export default function Home() {
  const dispatch = useDispatch();
  const hospital = useSelector((state) => state.hospital);
  useEffect(() => {
    dispatch(getHospitals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>this is HOME page</h1>
      <ul>
        {hospital.data.length > 0 &&
          hospital.data.map((item) => (
            <li key={item.hospital_id}>{item.alias}</li>
          ))}
      </ul>
    </div>
  );
}
