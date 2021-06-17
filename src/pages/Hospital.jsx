import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';

export default function Hospital() {
  const [selectedHospital, setSelectedHospital] = useState(null);
  const hospital = useSelector((state) => state.hospital);

  const handleHospitalChange = (e, value) => {
    if (value) {
      setSelectedHospital(value);
    } else {
      setSelectedHospital(null);
    }
  };

  return (
    <div>
      {selectedHospital && <p>{selectedHospital.alias}</p>}
      <Autocomplete
        // disabled={initialSchedule.status === "loading"}
        // id='selectedHospital'
        options={hospital.data.length > 0 ? hospital.data : []}
        getOptionLabel={(option) => option.alias}
        onChange={handleHospitalChange}
        value={selectedHospital}
        getOptionSelected={(option, value) =>
          option.hospital_id === value.hospital_id
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label='Lokasi Vaksinasi'
            required
            variant='filled'
            type='text'
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
            }}
            // className={classes.textField}
          />
        )}
      />
    </div>
  );
}
