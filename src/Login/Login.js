import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from "../imgs/login.png"
import "./Login.css"

function Login() {
  
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let navigate = useNavigate()
  
  
  
  
  return (
    <section className='login'>
        <div className='container'>
          <div className='content d-flex align-items-center justify-content-center'>
            <div className='img-content'>
                <img src={loginImg} alt = "Login Img" className='w-100 h-100'/>
            </div>
              
            <div className='form-content'>
                <h2>Login</h2>
                <form>
                  <input type="text" placeholder='Email' required value={email} onChange = {e => setEmail(e.target.value)}/>
                  <input type="password" placeholder='Password' required value={password} onChange = {e => setPassword(e.target.value)}/>
                  <button className='btn btn-primary'>Login</button>
                  <Link to="/reset">Forget Password</Link>
                  <p className='text-center mt-3'>--Or--</p>
                  <button className='btn login-google'>Login With Google</button>
                  <p className='text-center mt-1'>Don't Have an Account? <Link to = "/register">Register</Link></p>
                  
                </form>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Login