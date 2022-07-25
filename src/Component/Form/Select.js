import React from 'react'

function Select({options,value,setValue,_default}) {
  return (
    <>
    <select
    value={value}
    className="capitalize"
    onChange={({ target }) => setValue(target.value)}
    >
<option value='disabled'>
{_default || "Selecione *"}
</option>
{options?.map((option)=>(
    <option key={option} value={option} >
        {option}
    </option>
))}
    </select>
    </>
  )
}

export default Select