import React, { Component } from 'react';
import Identicon from 'identicon.js';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-light fixed-top bg-light flex-md-nowrap" style={{backgroundColor: 'black'}}>
        <h2 className="title">
          ERC20 Token Exchange
        </h2>
        <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                <big className="text-secondary">
                    <small id="account">Owner : {this.props.account}</small>
                </big>
                {
                    this.props.account ? <img
                    className="ml-2"
                    width="30"
                    height="30"
                    src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                    alt="" />
                    : <span></span>
                }
            </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
