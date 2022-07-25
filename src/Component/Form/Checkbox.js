import React from 'react'

function Checkbox(id,label,value,values,handleChange) {
  return (
    <div>
       <label htmlFor={id} style={{ cursor: "pointer" }}>
            <input
                type="checkbox"
                name={id}
                id={id}
                value={value}   
                checked={values.includes(value)}  
                onChange={({target})=>handleChange(target)}      
            />
            {label}
        </label>
    </div>
  )
}

export default Checkbox