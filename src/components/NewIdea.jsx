import React, { Component } from 'react';
import firebase from '../../firebase.config.js';

class NewIdea extends Component {
  constructor() {
    super();
    this.state = {
      screenName: '',
      mainIdea: '',
      category: '',
      price: '',
      time: '',
      weblink: '',
      otherInfo: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  handleSubmit() {
    const { screenName, mainIdea, category, price, time, weblink, otherInfo } = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      })
      .then((user) => {
        firebase.database().ref('users')
          .child(user.uid)
          .set({email: email, screenName: screenName})
      })
      .then(() => {
        console.log(`email has registered`)
      })
      .then(() => {
        this.props.router.push('/dashboard');
      })
  }

  render() {
    return (
      <div id="new-idea-box" className="clearfix">
        <h1>This is the NEW IDEA form</h1>
        <input
          name="mainIdea"
          value=""
          type="textarea"
          onChange={this.handleChange}
          placeholder="here's my idea"
        />
        <input
          name="category"
          value=""
          type="text"
          onChange={this.handleChange}
          placeholder="category"
        />
        <input
          name="price"
          value=""
          type="text"
          onChange={this.handleChange}
          placeholder="price range"
        />
        <input
          name="time"
          value=""
          type="text"
          onChange={this.handleChange}
          placeholder="amount of time required"
        />
        <input
          name="weblink"
          value=""
          type="text"
          onChange={this.handleChange}
          placeholder="website address"
        />
        <input
          name="otherInfo"
          value=""
          type="text"
          onChange={this.handleChange}
          placeholder="additional information (ie 'Ask for Jane')"
        />
        <button
          className="idea-submit"
          onSubmit={this.handleSubmit}
          >
          Submit
          </button>
      </div>
    );
  };
}

export default NewIdea;
