import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({filter, setFilter}) => {

  //for debounce global filters
const [value, setValue] = useState(filter)
const onChange = useAsyncDebounce(value => {
  setFilter(value || undefined)
}, 100)

  return (
    <>
   <span>
       Search: {' '}
       <input value={filter || ''} 
       onChange={(e) => {
         setValue(e.target.value)
         onChange(e.target.value)
       }} />
   </span>
<div className='d-flex justify-content-center mb-3'>
  <button className='bg-danger text-white '>download</button>
  </div>
</>
  )
}
