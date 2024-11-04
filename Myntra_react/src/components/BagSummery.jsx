import React from 'react'

function BagSummery({}) {

    const bagSummery={
        totalItem:23,
        totalMRP:3555,
        totalDiscount:999,
        finalPayment:3556
    }  ;

  return (

     

     <div classNameName="bag-summary">
      <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({bagSummery.totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{bagSummery.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{bagSummery.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{bagSummery.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
    
  )
}

export default BagSummery
