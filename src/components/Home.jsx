import React, { Component } from 'react';
import firebase from '../../firebase.config.js';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      useremail: '',
    }
    this.getUserInfo = this.getUserInfo.bind(this);
  }
  componentDidMount() {  // Only happens once.. on first load
    this.getUserInfo();
  }
  getUserInfo() {
  const user = firebase.auth().currentUser;
    if (user) {
      // console.log(user.email + ' is logged in');
      // console.log(user.uid + ' is logged in');
      this.setState({
        userid: user.uid,
        useremail: user.email
      })
    } else {
      console.log('No user is logged in');
    }
  }
  render() {
    return (
      <div>
          <h1>I am the HOME PAGE - and feeling very unprotected</h1>
          <p>Welcome {this.state.useremail}</p>
      </div>
      );
  };
}

export default Home;

