import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import NewIdea from './NewIdea.jsx';
import IdeaList from './IdeaList.jsx';

class Dashboard extends Component {
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
      this.setState({
        userid: user.uid,
        useremail: user.email,
      })
    } else {
      console.log('No user is logged in');
    }
  }
  render() {
    return (
      <div>
        <h1>This is the DASHBOARD page. This page IS protected</h1>
        <p>Welcome {this.state.useremail}</p>
        <NewIdea
          id="123"
          mainIdea="This is the idea right here"
          website="http://www.lynnfleck.com"
          screenName="trying to get screenName from the database"
        />
        <IdeaList
          id="123"
          mainIdea="This is the idea right here"
          website="http://www.lynnfleck.com"
          screenName="Lynn F"
        />
      </div>
      );
  }
}

export default Dashboard;
