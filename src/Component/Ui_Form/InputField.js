import { Box, TextField } from '@mui/material'
import React from 'react'

function InputField(prop) {
  return (
<Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
  >
    <TextField
    type={prop.type}
    label={prop.label}
    name={prop.name}
    variant="outlined"
    value={prop.value}
     />
</Box>
  )
}

export default InputField