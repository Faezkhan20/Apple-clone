import React from 'react'
import './Signin.css'
import Navbar from './Navbar'

const Signin = () => {
  return (
    <div id='signinscreen'>
      <Navbar />
      <div id='signincheckout'>Sign in for faster checkout.</div>
      <div id='signintoapple' >Sign in to Apple Store</div>
      <div id='emailor' >
        <input type="text" placeholder='Email or Phone Number' />
      </div>
      <div id='rememberme'>
        <input
          id='checkboxre' type="checkbox" />
        <div id='rediv'>Remember Me</div>
      </div>
      <div id='forgetpass' >Forgotten your password?</div>
      <div id='haveanapple' >Do not have an Apple ID?
        <div id='createyours'> Create yours now.</div>

      </div>
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