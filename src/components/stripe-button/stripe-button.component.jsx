import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripeButton extends React.Component {

  priceForStripe;
  publicKey = 'pk_test_ozuaQxnHFVUW87Ei8AjtqYdr';

  constructor(props){
    super(props);

    this.priceForStripe = this.props.price * 100;
  }

  onToken = token => {
    console.log('onToken', token);
    alert('Payment successful');
  }

  render() { 
    return (
      <StripeCheckout
        name='CRWN Clothing Ltd.'
        label='Pay now'
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${this.props.price}`}
        amount={this.priceForStripe}
        panelLabel='Pay now'
        token={this.onToken}
        stripeKey={this.publicKey}
      />
    )
  };
}

export default StripeButton;