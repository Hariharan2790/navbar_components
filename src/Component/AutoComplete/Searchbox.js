import React from 'react'

import Autocomplete from '@mui/material/Autocomplete';

function Searchbox({id, options,sx,renderInput,getOptionLabel,multiple,onChange,value}) {
  return (
    <Autocomplete
    multiple={multiple}
    id={id}
    options={options}
    sx={sx}
    renderInput={renderInput}
    getOptionLabel={getOptionLabel}
    onChange={onChange}
    value={value}
    /> 
   
    
  )
}



export default Searchbox