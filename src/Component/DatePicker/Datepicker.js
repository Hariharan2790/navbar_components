import React from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Datepicker({label,value,setValue,disabled,disableFuture,disablePast}) {
    // const [value, setValue] = useState(null)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
        label={label}
        value={value}
        disabled={disabled}
        disableFuture={disableFuture}
        disablePast={disablePast}
        onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}/>
    </LocalizationProvider>

  )
}

export default Datepicker