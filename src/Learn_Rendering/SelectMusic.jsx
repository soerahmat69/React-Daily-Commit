import React from 'react'

function SelectMusic({onchange,value}) {
  return (
    <div> 
            <select className=' ring-1 ring-black mx-3 my-2' value={value} onChange={onchange}>
                <option value="PHONK">PHONK RSX</option>
                <option value="PHONK">PHONKER 0Z5</option>
                <option value="ROCK">ACDC OX</option>
            </select>
    </div>
  )
}

export default SelectMusic