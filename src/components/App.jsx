import React, { Component } from 'react';
import { Link } from 'react-router';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="container">
        <header className="clearfix">
          <h1>Lynn's NYC and do</h1>
          <div id="login-links-group">
            <Link className="login-links">Login</Link>
            <Link className="login-links">Register</Link>
            <Link className="login-links">Logout</Link>
          </div>
          <div id="nav-links-group">
            <Link className="nav-links" to="/">Home</Link>
            <Link className="nav-links" to="login">Login</Link>
            <Link className="nav-links" to="dashboard">Dashboard</Link>
          </div>
        </header>
        <div id="content">
          {this.props.children}
        </div>
      </div>
      );
  };
}

export default App;
