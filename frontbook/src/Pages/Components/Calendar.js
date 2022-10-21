import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './project.css';

export default function BasicDatePicker(props) {
  const [value, setValue] = React.useState(null);

  return (
    <div className="dcha">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={props.text}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
