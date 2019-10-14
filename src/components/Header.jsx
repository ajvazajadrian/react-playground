import React, { Component } from 'react';
import "./Header.scss";

class Header extends React.Component {
    render() {
      return (
          <div id='header'>
          <h1> Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
          <button id="awesomeButton">Awesome!</button>
          </div>
      );
    }
  }


export default Header





