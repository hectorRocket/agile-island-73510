import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import StripeWrapper from "./StripeWrapper";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <Fragment>
            <li>
              <StripeWrapper />
            </li>
            <li style={{ margin: "0 10px" }}>
              &nbsp;Credits: {this.props.auth.credits}
              &nbsp;$
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </Fragment>
        );
    }
  }

  render() {
    return (
      <div>
        <nav className="nav-content blue-grey darken-3">
          <div className="nav-wrapper">
          <img className="responsive-img" height="50px" width="50px" alt="" src="rocket_cube_2.png" />
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="brand-logo"
            >
              &nbsp;Rocket App
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
        {/*<ul className="sidenav">
          <li>
            <a href="/">Login With Google</a>
          </li>
          <li>
            <a href="/">Papas con Queso</a>
          </li>
        </ul>*/}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
