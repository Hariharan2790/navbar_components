import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

function BasicTextField({id,label,variant,type,required,helperText}) {
    const [value,setValue] = useState("")
    const handleChange=(e)=>{
        e.preventDefault();
        console.log(value);
        setValue(e.target.value);
    }
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id={id} label={label} variant={variant} value={value} onChange={handleChange} type={type} required={required} 
      helperText={!value ? 'Required': "Do not share with anyone"} />
      <TextField id={id} label={label} variant={variant} value={value} onChange={handleChange} type={type}
      InputProps={{
        startAdornment: <InputAdornment position="end">$</InputAdornment>
      }}
      />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" value={value} />
      <TextField id="standard-basic" label="Standard" variant="standard"value={value} /> */}
    </Box>
  );
}

export default BasicTextField;
