import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button></button>
        <p>Already have an account? <span>Sign In</span></p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id='' />
          <p>By continuing, you agree to Zindar Market's <span>Terms of Use</span> and <span>Privacy Policy</span></p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignUp