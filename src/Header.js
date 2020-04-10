import React, { Component } from "react";
import Background from "./img/bg-masthead.jpg";
import "./Header.css";

const myStyles = {
  backgroundImage: `url( ${Background} )`,
  height: "65vh",
  backgroundSize: "cover"
};

class Header extends Component {
  render() {
    return (
      <header style={myStyles}>
        <h1>{this.props.title}</h1>
        <p>Weekend away in Northern Ireland</p>
        <a href="button">{this.props.button}</a>
      </header>
    );
  }
}

export default Header;
