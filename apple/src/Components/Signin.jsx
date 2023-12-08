import React, { useContext, useState } from 'react'
import './Signin.css'
import Navbar from './Navbar'
import toast from 'react-hot-toast';
import api from '../Helpers/Axiosconfig';
import { AuthContext } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const { Login } = useContext(AuthContext)

  const router = useNavigate();
  console.log(data, 'data')

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  async function HandleSubmit(event) {
    event.preventDefault();
    if (data.email && data.password) {

      try {
        // console.log("hii")
        const response = await api.post('auth/login', { data })
        if (response.data.success) {
          localStorage.setItem('My-token', JSON.stringify(response.data.token))
          Login(response.data.user)
          console.log(response.data.token, "token")
          toast.success(response.data.message);
          setData({ email: '', password: '' })
          router("/");
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        toast.error(error?.response.data.message);
        console.log(error, "error hai")
      }

    }
    else {
      toast.error("All fields are mandatory!")
    }
  }
  return (
    
    <div id='signinscreen'>
      <Navbar />
      <form onSubmit={HandleSubmit}>
      <div id='signincheckout'>Sign in for faster checkout.</div>
      <div id='signintoapple' >Sign in to Apple Store</div>
      <div id='emailor' >
        <input type="text" placeholder='Email' name='email' onChange={handleChange} />
      </div>
      <div id='emailor' >
        <input type="password" placeholder='Password' name='password' onChange={handleChange} />
      </div>
      <input id='signinbutton' type="submit" value="Submit" />
      <div id='rememberme'>
        <input
          id='checkboxre' type="checkbox" />
        <div id='rediv'>Remember Me</div>
      </div>
      <div id='forgetpass' >Forgotten your password?</div>
      <div id='haveanapple' >Do not have an Apple ID?
        <div id='createyours'> Create yours now.</div>

      </div>
      </form>
      <div id='createline'></div>

      <div id='needsome'>
        <span>Need some help?</span>
        <span> Chat now</span>
        <span> or call 000800 040 1966.</span>
      </div>

      <div id='newcolor'>
        <div id='useidiv'> <span id='useindustry'>The Apple Online Store uses industry-standard encryption to protect the confidentiality of the information you submit. Learn more about our <span id='useindustryy'> Security Policy.</span> </span></div>
        <div id='morewaysline'></div>
        <div id='moreshop'>
          <span>More ways to shop:</span>
          <span id='findan' > Find an Apple Store </span>
          <span>or</span>
          <span id='otherre' > other retailer </span>
          <span>near you. Or call 000800 040 1966.</span>
        </div>
        <div id='copyright' >
          <div>Copyright © 2023 Apple Inc. All rights reserved.</div>
          <div>Privacy Policy | Terms of Use | Sales Policy | Legal Site Map</div>
        </div>
        <div id='india' >India</div>

      </div>


    </div>
  )
}

export default Signin