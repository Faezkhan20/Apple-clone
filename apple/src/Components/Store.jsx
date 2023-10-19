import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Store.css';

const Store = () => {
    return (
        <div id='screen'>
            <Navbar />

            <div id='middle-store'>

                <div className='card-store'>
                    <span>Get ₹18000.00–₹67800.00 in credit towards iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher.* </span>
                    <span>Shop iPhone {'>'}</span>
                </div>

                <div className='store-top'>
                    <div className="top-left">
                        <div><p><span>Store.</span> The best way to buy the products you love.</p></div>
                    </div>
                    <div className="top-right">
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div><i className="fa-regular fa-circle fa-2xl"></i></div>
                                <div>
                                    <div className='refer'>Need shopping help?</div>
                                    <div style={{ textAlign: 'start' }}><button className=" btn-2">ask a specialist</button></div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                <div><i className="fa-regular fa-circle fa-2xl"></i></div>
                                <div>
                                    <div className='refer'>Visit an Apple Store</div>
                                    <div><button className=" btn-2">find one near you {'>'}</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='slider-content '>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670959891635" alt="" className="slide-imgs" />
                        <div>Mac</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1692971740190" alt="" className="slide-imgs" />
                        <div>iPhone</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437" alt="" className="slide-imgs" />
                        <div>iPad</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1693703822208" alt="" className="slide-imgs" />
                        <div>Apple Watch</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885" alt="" className="slide-imgs" />
                        <div>AirPods</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000" alt="" className="slide-imgs" />
                        <div>AirTag</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484" alt="" className="slide-imgs" />
                        <div>Apple TV 4k </div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654" alt="" className="slide-imgs" />
                        <div>HomePod</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1692803114952" alt="" className="slide-imgs" />
                        <div>Accessories</div>
                    </div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054" alt="" className="slide-imgs" />
                        <div>Apple Gift Card</div>
                    </div>
                </div>

                <div className='title'>
                    <p><span>The latest. </span>Take a look at what’s new, right now.</p>
                </div>

                <div className='content-slide'>
                    <div><div className='content-slide-start'></div></div>
                    <div ><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692719973220" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s9-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720183508" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-ultra-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720471465" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watchbands-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720583186" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-airpods-pro-202209?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1661016986712" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202306?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1683844828182" alt="" className="content-slide-box" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645636337374" alt="" className="content-slide-box" /></div>
                </div>

                <div className='title'>
                    <p><span>Help is here. </span>Whenever and however you need it.</p>
                </div>

                <div className='content-slide'>
                    <div><div className='content-slide-start'></div></div>
                    <div ><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202305?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1684946879038" alt="" className="content-slide-box-2" /></div>
                    <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-video-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1694270835539" alt="" className="content-slide-box-2" /></div>

                    <div>
                        <div className="content-slide-box-3">
                            <div ><div className="content-slide-box-vertical" /></div>
                            <div ><div src="" alt="" className="content-slide-box-vertical-two" /></div>
                        </div>
                    </div>
                </div>

                <div className='quick-link-container'>
                    <h2 className='quick-link'><span>Quick</span> Links</h2>
                    <div>
                        <button className="quick-link-btn">Order Status</button>
                        <button className="quick-link-btn">Shopping Help</button>
                        <button className="quick-link-btn">Your Saves</button>
                    </div>
                </div>

                <div className='store-foot-text'>
                    <div className='store-footer'>
                        <p>◊◊ Monthly pricing is after purchase using EMI with qualifying cards at 15% pa over a 6 month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be<br/> provided by your bank, subject to your bank’s terms and conditions.</p><br/>
                        <p>Representative example: Based on purchase of ₹79900.00. Total amount payable ₹83432.00 paid over 6 months as 6 monthly payments of ₹13905.00 at an interest rate of 15%<br/> pa. Total interest paid to bank: ₹3532.00.</p><br/>
                        <p>§ No-Cost EMI available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the<br/> nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card issuing bank threshold.<br/> Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your<br/> card issuing bank. Offer may be revised or withdrawn at any time without any prior notice. https://www.apple.com/in/shop/browse/financing/terms Terms Apply.</p><br/>
                        <p>Representative example: Based off a 6 month tenure. ₹79900.00 total cost includes 15% pa and No Cost EMI savings of ₹3380.00, paid over 6 months as 6 monthly payments of ₹13317.00.</p><br/>
                        <p>§§ Instant savings, otherwise referred to as instant cashback, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit<br/> Cards only. Minimum transaction value of ₹10001 applies. Click here to see instant savings amounts and eligible devices. Instant savings are available for up to two orders per<br/> rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuing bank. Total transaction value is calculated after<br/> any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be<br/> adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice.<br/> https://www.apple.com/in/shop/browse/financing/terms Terms Apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing.<br/> Multiple separate orders cannot be combined for instant savings.</p><br/>
                        <p>* Trade-in values will vary based on the condition, year and configuration of your trade-in device, and is computed on Maximum Retail Price. You must be at least 18 years<br/> old to be eligible to trade in for credit. Not all devices are eligible for credit. We only accept MacBook portables for Trade In at our Apple Stores. More details are available<br/> from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply. Credit applied towards your new device will be based on<br/> the received device matching the description you provided when your estimate was made and upon validation. Apple reserves the right to refuse or limit the quantity of any<br/> device for any reason.</p>
                        <p>2. Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or give us a call on<br/> 000800 040 1966.</p><br/>
                        <p>° New and qualified returning subscribers only. ₹99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a FamilySharing group,<br/> regardless of the number of devices that you or your family purchase. This offer is not available if you or your Family have previously accepted an Apple TV+ three-months-free<br/> or one-year-free offer. Offer valid for three months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.</p><br/>
                        <p>⁺ New subscribers only. ₹99/month after trial. Offer available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer valid for three months after eligible device pairing. No audio product purchase necessary for current owners of eligible devices. Plan automatically renews until<br/> cancelled. Restrictions and other terms apply.</p><br/>
                        <p>‡ Listed pricing is Maximum Retail Price (inclusive of all taxes).</p><br/>
                        <p>We use your location to show you delivery options faster. We found your location using your IP address or because you entered it during a previous visit to Apple.</p>
                    </div>
                    <div className="horizontal-line"></div>
                </div>

            </div>
            <Footer />
        </div>
        
    )
}

export default Store
