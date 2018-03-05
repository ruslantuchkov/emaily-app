import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeChekout from 'react-stripe-checkout';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <div>
        <StripeChekout
          name="Emaily"
          description="$5 for 5 email credits"
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="btn">Add Credits</button>
        </StripeChekout>
      </div>
    );
  }
}

export default connect(null, actions)(Payments);
