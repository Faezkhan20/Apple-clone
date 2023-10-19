import React from 'react'
import './Applebuypage.css'
import Navbar from './Navbar'
import Footer from './Footer'


const Applebuypage = () => {
    return (
        <div id='applebuypagebottom'>
            <Navbar />
            <div>
                <div id='bluediv'> <div>Save up to ₹6000.00 instantly on iPhone with HDFC Bank Credit Cards. Plus No Cost EMI from most leading banks.‡</div> <div>Shop iPhone</div> </div>
                <div id='blackmaindiv'>
                    <div>iPhone 15 Pro</div>
                    <div></div>
                    <div>Buy</div>
                    <div>From ₹21483.00/mo.‡ or ₹134900.00*</div>
                </div>
                <div id='greydiv'>
                    <div>Get the highlights.</div>
                    <div id='greydivblue'>
                        <div>Watch the film</div>

                        <div>Watch the event</div>


                    </div>
                    <div id='applechip' >
                        <div>

                            <video width="100%" height="100%" loop muted autoPlay>
                                <source src="https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/highlights-titanium/large_2x.mp4"></source>
                            </video>
                            <div id='videodivchip'>All-new Action button. <br /> What will yours do?</div>
                        </div>
                    </div>

                    <div id='takeacloser'>
                        <div>Take a closer look.</div>
                        <div></div>

                    </div>

                    <div id='explorethefull'>Explore the full story.</div>
                    <div id='iphoneforged'>iPhone. </div>
                    <div id='iphoneforgedd'>Forged in titanium.</div>

                    <div id='bodythreeone'> <div></div> <video autoPlay src="https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/titanium/large_2x.mp4"></video></div>
                    <div id='bodythreetwo'></div>
                    <div id='bodythreethree'></div>
                </div>
                <div className='apple15-body4-p'>
                    <div>
                        <p>
                            iPhone 15 Pro is <span id='white'> the first iPhone to feature an
                                aerospace‑grade titanium design,</span> using the same alloy
                            that spacecraft use for missions to Mars.
                        </p>
                    </div>
                    <div>
                        <p>
                            Titanium has one of the best strength‑to‑weight
                            ratios of any metal, making these our  <span id='white'>lightest Pro models ever.</span>
                            You’ll notice the difference the moment you
                            pick one up.
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Applebuypage