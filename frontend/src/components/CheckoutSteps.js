import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} >Signin</div>
    <div className={props.step2 ? 'active' : ''} >livraison</div>
    <div className={props.step3 ? 'active' : ''} >Paiement</div>
    <div className={props.step4 ? 'active' : ''} >Passer la commande</div>
  </div>
}

export default CheckoutSteps;