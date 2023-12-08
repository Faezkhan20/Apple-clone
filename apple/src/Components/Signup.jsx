import React, { useState } from 'react'
import './Signup.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import api from '../Helpers/Axiosconfig'

const Signup = () => {
    const router = useNavigate()

  const [data, setdata] = useState({name:"", email: "", password: "",lastname:"",confirmPassword:"" });
  console.log(data, "user")
  const handleChange = (event) => {
    // console.log(event.target.value, "value", event.target.name, "name")
    setdata({ ...data, [event.target.name]: event.target.value })
  }

  async function HandleSubmit(event) {
    event.preventDefault();
 
      if (data.password.length >= 8) {
        try {
          const response = await api.post("/auth/register", { data })
          if(response.data.success) {
            toast.success(response.data.message)
            setdata({ name:"",email: "", password: "",lastname:"",confirmPassword:""})
            router("/signin")
          } else {
            throw new Error("Something went wrong");
          }
        } catch (error) {
          toast.error(error.message);
          console.log(error, 'error hai')
        }
      } else {
        toast.error("Password must be 8 digit")
      }
  
  }

    return (
        <div id='apple-reg-screen'>
            <Navbar/>
            <form onSubmit={HandleSubmit}>
            <div className='apple-reg-top'>
                <div>
                    <h2>Apple ID</h2>
                    <div className='apple-reg-top-right'>
                        <a>Sign In</a>
                        <a>Create your Apple ID</a>
                        <a>FAQ</a>
                    </div>
                </div>
            </div>

            <div className='apple-reg-body'>
                <div className='apple-reg-innerbody'>
                    <h1 className='apple-reg-top-h1'>Create Your Apple ID</h1>
                    <span className='apple-reg-top-span'>One Apple ID is all you need to access all Apple services.</span>
                    <div className='apple-reg-name'>
                        <input placeholder='first name' onChange={handleChange} name='name' />
                        <input placeholder='last name' onChange={handleChange} name='lastname' />
                    </div>
                    <p className='apple-reg-country-p'>COUNTRY / REGION</p>
                    <select className='apple-select'>
                        <option value="volvo">India</option>
                        <option value="saab">America</option>
                        <option value="mercedes">United Kingdom</option>
                        <option value="audi">China</option>
                    </select>
                    <input type='date' className='apple-reg-date' />
                </div>
                <h1 className='apple-reg-line'></h1>
                <div className='apple-reg-innerbodytwo'>
                    <div id='nameex'>
                        <input type="text" placeholder='name@example.com' name='email' onChange={handleChange} />
                        <span>This will be your new Apple ID.</span>
                        <input type="password" placeholder='password' name='password' onChange={handleChange} />
                        <input type="password" placeholder='confirm password' name='confirmPassword' onChange={handleChange} />

                    </div>

                </div>
                <h1 className='apple-reg-line'></h1>
                <div className='apple-reg-innerbodytwo'>
                    <div id='nameex'>
                        <select className='apple-select'>
                            <option value="volvo">+91 (India)</option>
                            <option value="saab">+1 (United State)</option>
                            <option value="mercedes">+44 (United Kingdom)</option>
                            <option value="audi">+83 (China mainland)</option>
                        </select>
                        <input id='numberch' type="number" placeholder='phone number' />
                        <div id='makesurediv'>Make sure you enter a phone number you can always access. It <br /> will be used to verify your identity any time you sign in on a new <br />device or web browser. Messaging or data rates may apply.</div>
                        <div id='checkmaindiv'>
                            <div>Verify with a:</div>
                            <div><input type="radio" />Text message</div>
                            <div><input type="radio" />Phone call</div>
                        </div>
                    </div>
                </div>
                <h1 className='apple-reg-line'></h1>
                <div id='announce'>
                    <div id='announceone'>
                        <input type="checkbox" />
                        Announcements
                        <p>Receive Apple emails and communications including announcements, <br /> marketing, recommendations and updates about Apple products, services and <br /> software.</p>
                    </div>
                    <div id='announcetwo'>
                        <input type="checkbox" />
                        Apps, Music, TV and More
                        <p>Receive Apple emails and communications including new releases, exclusive <br /> content, special offers and marketing, and recommendations for apps, music, <br /> movies, TV, books, podcasts and more.</p>
                    </div>

                </div>
                <h1 className='apple-reg-line'></h1>
                <div id='qrparent'>
                    <div id='qrdiv'>
                        <div></div>

                        <input id='qrinput' type="text" placeholder='Type the character shows in the image' />
                        
                    </div>
                    <div id='newcodeqr' >
                        <div>New code</div>
                        <div></div>
                        <div>Visually-impaired</div>
                    </div>
                   
                </div>
                <h1 className='apple-reg-line'></h1>

                <div id='lastapplediv' >
                    <div><img src="https://appleid.cdn-apple.com/static/bin/cb230738313/dist/assets/privacy-icon@2x.png" alt="" /></div>
                    <div id='lastdatap'>
                        <span>Your Apple ID information is used to allow you to sign in securely and access your <br /> data. Apple records certain data for security, support and reporting purposes. If you <br /> agree, Apple may also use your Apple ID information to send you marketing emails <br /> and communications, including based on your use of Apple services. <span id='seehowblue' > See how your <br /> data is managed.</span></span>
                       <div></div> <input type='submit' value="register" className='apple-reg-last-button'></input>
                    </div>
            
                </div>
              
            </div>
            </form>
            <div id='signupfooter'>
                <span>More ways to shop <span id='seehowblue'>: Find a retailer</span> near you. Or call 000800 040 1966.</span>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Signup