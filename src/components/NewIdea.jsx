import React, { Component } from 'react';
import firebase from '../../firebase.config.js';



class NewIdea extends Component {
  constructor() {
    super();
    this.state = {
      mainIdea: '',
      website: '',
      extraInfo: '',
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
  submitNewIdea( mainIdea, website, extraInfo ) {
    const loggedInUser = firebase.auth().currentUser;
    const newPostKey = firebase.database().ref().child('ideas').push().key;
    firebase.database().ref(`ideas/${newPostKey}`).set({
      mainIdea: this.state.mainIdea,
      website: this.state.website,
      extraInfo: this.state.extraInfo,
      uid: loggedInUser.uid,
      email: loggedInUser.email,
    })
    .then(() => {
        console.log('form has been submitted')
    })
  }
  render() {
    return (
      <div id="new-idea-box" className="clearfix">
        <h1>This is the NEW IDEA form</h1>
        <div className={this.props.id}></div>
        <input
          name="mainIdea"
          type="textarea"
          onChange={this.handleChange}
          value={this.state.mainIdea}
          placeholder="Here's something you should do"
        />
        <input
          name="website"
          type="url"
          onChange={this.handleChange}
          placeholder="website"
        />
        <input
          name="extraInfo"
          type="text"
          onChange={this.handleChange}
          placeholder="anything else I should know?"
        />
        <button
          className="idea-submit"
          onClick={this.submitNewIdea}
          >
          Submit
        </button>
        <div>Submitted by: {this.props.screenName}</div>
      </div>
    );
  };
}

export default NewIdea;
