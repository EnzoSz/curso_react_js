import React from 'react'
import '../styles/TodoSearch.css'

function TodoSearch() {
  return (
    <input className='TodoSearch' placeholder='Cortar cebolla'
      onChange={(event)=>{
        console.log('escribiste en el TodoSearch');
        console.log(event.target);
        console.log(event.target.value);
      }}/>
  )
}

export  {TodoSearch};