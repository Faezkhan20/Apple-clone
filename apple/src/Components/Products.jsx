import './Product.css'
import React, { useState } from 'react'

const Products = () => {
    const [Products, setProducts] = useState([{
        name: "iPhone 15 Pro & iPhone 15 Pro Max",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312",
        price: "From ₹21483.00/mo. with instant savings§§ and No Cost EMI§ or ₹134900.00‡"
    }, {
        name: "iPhone 15 & iPhone 15 Plus",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290559",
        price: "From ₹12483.00/mo. with instant savings§§ and No Cost EMI§ or ₹79900.00‡"
    }, {
        name:"Phone 14 & iPhone 14 Plus",
        image :"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290654",
        price : "From ₹10983.00/mo. with instant savings§§ and No Cost EMI§ or ₹69900.00‡"
    }, {
        name : "iPhone 13",
        image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1692912410963",
        price : "From ₹9483.00/mo. with instant savings§§ and No Cost EMI§ or ₹59900.00‡"
    }, {
        name : "iPhone SE",
        image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646415838921",
        price : "From ₹7983.00/mo. with instant savings§§ and No Cost EMI§ or ₹49900.00‡"
    }, {
        name : "iPhone SE",
        image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646415838921",
        price : "From ₹7983.00/mo. with instant savings§§ and No Cost EMI§ or ₹49900.00‡"
    }])

  return (
    <div className='Productscreen'>
    <div className='mainproduct'>
        <h2 className='mainh2'>All product </h2>
        <div className='productbody'>
            {Products.map((pro) => (
                <div className='products-single'>
                    <p>{pro.name}</p>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Products
