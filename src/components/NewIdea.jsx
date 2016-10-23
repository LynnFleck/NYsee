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
    e.preventDefault();
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
          complete: false,
          dateSubmitted: new Date().toJSON().slice(0,10),
        })
        .then(() => {
           this.setState({
              mainIdea: '',
              website: '',
              extraInfo: '',
            })
          alert('Thank you for submitting an idea!');
          this.props.httpGetPosts();
        })
    } else {
      alert('Looks like you aren\'t Logged In');
      this.props.router.push('/');
    };
  }
  render() {
    return (
      <div id="new-idea-box" className="clearfix">
        <h1>Contribute an Idea</h1>
        <div>
          <input
            name="mainIdea"
            type="textarea"
            onChange={this.handleChange}
            placeholder="Enter an idea"
            value={this.state.mainIdea}
          />
          <input
            name="website"
            type="url"
            onChange={this.handleChange}
            placeholder="website (optional)"
            value={this.state.website}
          />
          <input
            name="extraInfo"
            type="text"
            onChange={this.handleChange}
            placeholder="anything else? (optional)"
            value={this.state.extraInfo}
          />
          <button
            className="idea-submit btn"
            onClick={this.handleSubmit}
            >
            Submit
          </button>
        </div>
      </div>
    );
  };
}

export default withRouter(NewIdea);
