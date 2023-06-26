import React from 'react'

export default function FormInput(props) {
  return (
    <div>

        <p style={{fontWeight:'700', fontSize:'15'}}>{props.label}</p>
        <input style={{boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.1', border:'none', backgroundColor:'#FFFFFF', borderRadius:10, height:'60px', width:'478px'}} type='text' placeholder={props.placeholder} />

    </div>
  )
}
