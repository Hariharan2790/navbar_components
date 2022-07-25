import React from 'react'
import Button from '@mui/material/Button';

function Mybutton({variant,Text, disabled, color, size, fullWidth,component,onClick,sx}) {
  return (
    <Button variant={variant} disaled={disabled} 
    color={color} size={size} fullWidth={fullWidth}
    component={component} onClick={onClick}
    sx={sx}
    >{Text}</Button>
  )
}

export default Mybutton