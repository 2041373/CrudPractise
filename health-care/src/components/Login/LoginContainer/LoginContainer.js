import React from 'react'
import FormInput from './FormInput'
import Button from './Button'

export default function LoginContainer() {
  return (
    <div style={{backgroundColor:'#F8FAFB', marginRight:40, padding:20}}>

  
          <h1 style={{ width: '50%', textAlign: 'center', alignSelf: 'center' }}>Welcome Back </h1>
          <p style={{opacity:'0.5', color:'black'}}>Welcome Back! Login with your data that you entered during Registeration</p>
          <FormInput label='Username' placeholder='Enter your username' />
          <FormInput label='Password' placeholder='Enter your password' />
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <div style={{display:'flex', flexDirection:'row'}}>
              <input type='checkbox' />
              <p>Remember Me</p>
            </div>
            <a href='https://www.google.com'><p>Forgotten Password?</p></a>
          </div>
          <Button name='Login' />

    </div>
  )
}
