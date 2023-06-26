import React from 'react'

export default function Button(props) {
  return (
    <div>

        <button style={{backgroundColor:'#496BF6', color:'white', width:478, border:'none', height:60, boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.1)', marginTop:'20px', borderRadius:10}}>{props.name}</button>

    </div>
  )
}
