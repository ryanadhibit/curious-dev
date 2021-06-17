import React, { useState } from 'react';
import 'date-fns';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import idLocale from 'date-fns/locale/id';

export default function DatePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setIsOpen(false);
    setSelectedDate(moment(date).format('YYYY-MM-DD'));
  };
  return (
    <div>
      <p>{selectedDate}</p>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={idLocale}>
        <KeyboardDatePicker
          format='dd-MM-yyyy'
          value={selectedDate}
          onChange={(date) => handleDateChange(date)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
            onClick: () => {
              setIsOpen(true);
            },
          }}
          required
          minDate={new Date()}
          maxDate={moment().add(3, 'month')}
          InputProps={{
            disableUnderline: true,
            readOnly: true,
            onClick: () => {
              setIsOpen(true);
            },
          }}
          inputVariant='filled'
          label='Tanggal Kunjungan'
          open={isOpen}
          autoOk
          onClose={() => setIsOpen(false)}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}
