import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class StripeWrapper extends Component {
  render() {
    return (
      <StripeCheckout
        name="Dinero Dinero Dinero"
        description="El mundo se consume en dinero!"
        amount={500} // cents
        currency="USD"
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
        closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
      >
        <button className="btn">El dinero es dinero</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(StripeWrapper);
