import React, { Component } from 'react';
import firebase from '../../firebase.config.js';

const propTypes = {
  mainIdea: React.Component.string,
  website: React.Component.string,
}

class NewIdea extends Component {
  constructor() {
    super();
    this.state = {
      mainIdea: '',
      website: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitNewIdea = this.submitNewIdea.bind(this);
  }

  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  findScreenName() {

  }
  submitNewIdea( mainIdea, website ) {
    const loggedInUser = firebase.auth().currentUser;
    const newPostKey = firebase.database().ref().child('ideas').push().key;
    firebase.database().ref(`ideas/${newPostKey}`).set({
      mainIdea: this.state.mainIdea,
      website: this.state.website,
      uid: loggedInUser.uid,
      email: loggedInUser.email,
    })
    .then(() => {
        console.log('form has been submitted')
    })
    // Get a key for a new Post.
  }
  render() {
    return (
      <div id="new-idea-box" className="clearfix">
        <h1>This is the NEW IDEA form</h1>
        <div>{this.props.id}</div>
        <input
          name="mainIdea"
          type="textarea"
          onChange={this.handleChange}
          placeholder="here's my idea"
        />
        <input
          name="website"
          type="textarea"
          onChange={this.handleChange}
          placeholder="website"
        />
        <button
          className="idea-submit"
          onClick={this.submitNewIdea}
          >
          Submit
        </button>
        <div>{this.props.screenName}</div>
      </div>
    );
  };
}

export default NewIdea;
