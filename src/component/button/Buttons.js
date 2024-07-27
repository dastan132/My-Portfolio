import React from 'react'
import './Buttons.css'

function Buttons({buttonName}) {
  
  return (
    <div>
      {buttonName.map((btname) => (
        <button className='buttons' key={btname.id} >
          {btname.name}
        </button>
      ))}
    </div>
  )
}

export default Buttons
