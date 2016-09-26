import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class NewIdea extends Component {
  constructor() {
    super();
    this.state = {
      mainIdea: '',
      website: '',
      extraInfo: '',
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
  handleSubmit(e) {
    const user = firebase.auth().currentUser;
    const newPostKey = firebase.database().ref().child('ideas').push().key;
    if (user) {
      firebase.database().ref('ideas')
        .child(newPostKey)
        .set({
          user: user.uid,
          mainIdea: this.state.mainIdea || "",
          website: this.state.website || "",
          extraInfo: this.state.extraInfo || "",
          email: user.email,
          dateSubmitted: new Date().toJSON().slice(0,10)
        });
      alert('Thank you for submitting an idea!');
      console.log('form has been submitted');
      this.props.router.push('/dashboard');
    } else {
      alert('Looks like you aren\'t Logged In');
      this.props.router.push('/');
    };
  }
  render() {
    return (
      <div id="new-idea-box" className="clearfix">
        <h1>Contribute an Idea</h1>
        <div className={this.props.id}></div>
          <input
            name="mainIdea"
            type="textarea"
            onChange={this.handleChange}
            placeholder="Here's something you should do"
          />
          <input
            name="website"
            type="url"
            onChange={this.handleChange}
            placeholder="website (optional)"
          />
          <input
            name="extraInfo"
            type="text"
            onChange={this.handleChange}
            placeholder="anything else? ie. ask for Joe... (Optional)"
          />
          <button
            className="idea-submit btn"
            onClick={this.handleSubmit}
            >
            Submit
          </button>
      </div>
    );
  };
}

export default withRouter(NewIdea);
