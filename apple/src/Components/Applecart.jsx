import React from 'react'
import './Applecart.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Applecart = () => {
  return (
    <div>
      <div className='applecart'>
        <Navbar />
        <div className='applecartnav2'>
          <h4>Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards. Footnote §§ Plus No Cost EMI from most leading banks. §</h4>
          <h4>Learn more</h4>
        </div>
        <div className='applecartmianbody'>
          <div className='yourbagtotal'><span>Your bag total is ₹253600.00 or ₹40433.00/mo.per^</span></div>
          <div className='checkoutdiv'><button>Check Out</button></div>
          <div className='bottomline'></div>

          <div className='cartbody'>
            <div className='cartleft'>
              <div className='leftcartimg'>
                <img width="100%" height="100%" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-11-select-wifi-spacegray-202210?" alt="" />
              </div>
            </div>
            <div>
              <div className='rightcart'>
                <div className='cart-product-details-left'>
                  <h1>11-inch iPad Pro Wi-Fi 128GB - Space Grey</h1>
                  <p>Pay 15% pa for 6 month:</p>
                </div>
                <div className='cart-product-details-right'>
                  <div className='cart-pdr-div1'>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                    <h2>₹81900.00</h2>
                  </div>
                  <div className='cart-pdr-div2'>
                    <p>Get up to ₹8256.00 savings with eligible card(s)footnote^</p>
                    <span>₹12817.00/mo.^</span><br />
                    <button>Remove</button><br />
                    {/* <button>Save for later</button> */}
                  </div>
                </div>
              </div>
              <div className='bottominline'></div>
              <div className='appleicare'>
                <div className='icareleft'>
                  <div className='icareimg'><img width="100%" height="100%" src="data:image/jpeg;base64,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" alt="" /></div>
                  <div className='icaretext1'>AppleCare+ for iPad Pro 11‑inch (4th generation)</div>
                  <div className='icaretext2'>Pay 15% pa for 6 months:^</div>
                  <div className='icaretext3'>Automatically registered with your Apple hardware.</div>
                </div>
                <div className='icareright'>
                  <div className='icarertext'>₹15900.00</div>
                  <div className='icarertext2'>₹2650.00/mo.^</div>
                  <button className='icarebutton'>Remove</button>
                </div>
              </div>
              <div className='bottominline'></div>
              <div className='addfreemain'>
                <div className='addfreeleft'><i class="fa-solid fa-bars"></i>Add free engraving</div>
                <div className='addfreeright'><button className='addbuttonfree'>ADD</button></div>
              </div>
              <div className='bottominline'></div>
              <div className='pincodemain'>
                <div className='pincode1'>
                  <span>Find out how soon you can get this item. <span className='pincodeblue'>Enter pin code</span> <i class="fa-solid fa-chevron-down"></i> </span>
                </div>
                <div className='pincodemaintwo'>
                  <div><i class="fa-brands fa-stack-overflow"></i>In stock and ready to ship.</div>
                  <div><i class="fa-brands fa-app-store-ios"></i>Pick up at an Apple Store near you.</div>

                </div>

              </div>

            </div>

          </div>


        </div>
        <div className='bottominline2'></div>
        <div className='applecartmianbody2'>
          <div className='cartbody'>
            <div className='cartleft'>
              <div className='leftcartimg'>
                <img width="110%" height="100%" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select?" alt="" />
              </div>
            </div>
            <div>
              <div className='rightcart'>
                <div className='cart-product-details-left'>
                  <h1>
                    iPhone 15 Pro 128GB Natural Titanium</h1>
                  <p>Pay 15% pa for 6 month:</p>
                </div>
                <div className='cart-product-details-right'>
                  <div className='cart-pdr-div1'>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                    <h2>₹134900.00</h2>
                  </div>
                  <div className='cart-pdr-div2'>
                    <p>Get up to ₹11457.00 savings with eligible card(s)^</p>
                    <span>₹21483.00/mo.^</span><br />
                    <button>Remove</button><br />
                    {/* <button>Save for later</button> */}
                  </div>
                </div>
              </div>
              <div className='bottominline'></div>
              <div className='appleicare'>
                <div className='icareleft'>
                  <div className='icareimg'><img width="100%" height="100%" src="data:image/jpeg;base64,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" alt="" /></div>
                  <div className='icaretext1'>AppleCare+ for iPad Pro 11‑inch (4th generation)</div>
                  <div className='icaretext2'>Pay 15% pa for 6 months:^</div>
                  <div className='icaretext3'>Automatically registered with your Apple hardware.</div>
                </div>
                <div className='icareright'>
                  <div className='icarertext'>₹20900.00</div>
                  <div className='icarertext2'>₹3483.00/mo.^</div>
                  <button className='icarebutton'>Remove</button>
                </div>
              </div>
              {/* <div className='bottominline'></div> */}
              {/* <div className='addfreemain'>
                <div className='addfreeleft'><i class="fa-solid fa-bars"></i>Add free engraving</div>
                <div className='addfreeright'><button className='addbuttonfree'>ADD</button></div>
              </div> */}
              <div className='bottominline'></div>
              <div className='pincodemain'>
                <div className='pincode1'>
                  <span>Find out how soon you can get this item. <span className='pincodeblue'>Enter pin code</span> <i class="fa-solid fa-chevron-down"></i> </span>
                </div>
                <div className='pincodemaintwo'>
                  <div><i class="fa-brands fa-stack-overflow"></i>Ships in 2-3 weeks.</div>
                  <div><i class="fa-brands fa-app-store-ios"></i>Pick up at an Apple Store near you.</div>

                </div>

              </div>

            </div>

          </div>

        </div>
        <div className='bottomline3'></div>
        <div className='shippingmain'>
          <div className='shipping1'>
            <div>Subtotal</div>
            <div>₹253600.00</div>
          </div>
          <div className='shipping2'>
            <div>Shipping</div>
            <div>FREE</div>
          </div>
          <div className='bottomline4'></div>

        </div>
        <div className='shippingmain'>
          <div className='shipping3'>
            <div>Total</div>
            <div>₹253600.00</div>
          </div>
          <div className='shipping2'>
            <div>Monthly payment</div>
            <div>₹40433.00/mo.^ with EMI</div>
          </div>
          <div className='savingmain'>Total savings of ₹21272.00 with eligible card(s)^</div>
          <div className='nocostmain'>Explore instant Cashback§§ and No Cost EMI§</div>
          <div className='checkoutdiv2'><button>Check Out</button></div>


        </div>




      </div>
      <div className='bottomline5'></div>
      <div id='needsome'>
        <span>Need some help?</span>
        <span> Chat now</span>
        <span> or call 000800 040 1966.</span>
      </div>
      <div className='bottomline5'></div>
      <div className='youmaytop'>You may also like</div>
      <div className='youmaymain'>
        <div className='youmay1'>

          <img id='youmay1img' width="100%" height="100%" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU862?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1591824860000" alt="" />
          <div className='usbyoumay'>20W USB-C Power Adapter</div>
          <div>MRP ₹1900.00</div>
          <div>(Incl. of all taxes)</div>
          <button className='addtobagbutton'>Add to bag</button>
        </div>

        <div className='youmay2'>
          <img id='youmay2img' width="100%" height="100%" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT233?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1693248327138" alt="" />
          <div className='newyoumay'>New</div>
          <div className='usbyoumay'>iPhone 15 Pro Max Clear Case with MagSafe</div>
          <div className='usbdiv2'>MRP ₹4900.00</div>
          <div className='usbdiv2'>(Incl. of all taxes)</div>
          <button className='addtobagbutton2'>Add to bag</button>
        </div>
        <div className='youmay2'>
          <img id='youmay2img' width="100%" height="100%" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4H3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1693594178658" alt="" />
          <div className='newyoumay'>New</div>
          <div className='usbyoumay'>iPhone 15 Pro FineWoven Case with MagSafe - Black</div>
          <div className='usbdiv2'>MRP ₹5900.00</div>
          <div className='usbdiv2'>(Incl. of all taxes)</div>
          <button className='addtobagbutton2'>Add to bag</button>
        </div>
      </div>
      <div className='moreproduct'>Show more product<i class="fa-solid fa-chevron-down"></i></div>
      <div className='mainnewarrival'>

        <img height="100%" width="100%" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-new-arrivals-checkout-201804?wid=980&hei=400&fmt=jpeg&qlt=95&.v=1523551959954" alt="" />
        <div className='newarrivaltext'>New Arrivals</div>
        <div className='newarrivaltext2'>Check out the latest accessories.</div>
        <div className='newarrivalshop'>Shop<i class="fa-solid fa-angle-right"></i></div>
      </div>
      <div className='bottomline6'></div>
      <div className='questionbuy'>
        <div>Questions About Buying</div>
        <div><i class="fa-solid fa-plus"></i></div>
      </div>
      {/* <div className='lastgrey'>
        <div className='lasttextinside'>

          
        </div>
      </div> */}
      <Footer/>
    </div>
  )
}

export default Applecart