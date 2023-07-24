import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <h1 className="text-5xl font-bold text-center tracking-wider text-red-500 uppercase drop-shadow-lg">
        {this.props.title}
      </h1>
    );
  }
}

export default Header;
