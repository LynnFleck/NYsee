import React, { Component } from 'react';

class NewIdea extends Component {
  render() {
    return (
      <div id="new-idea-box" className="clearfix">
      <h1>This is the NEW IDEA form</h1>
        <input
          name="main-idea"
          value=""
          type="textarea"
          placeholder="here's my idea"
        />
        <input
          name="category"
          value=""
          type="text"
          placeholder="category"
        />
        <input
          name="price"
          value=""
          type="text"
          placeholder="price range"
        />
        <input
          name="time"
          value=""
          type="text"
          placeholder="amount of time required"
        />
        <input
          name="weblink"
          value=""
          type="text"
          placeholder="website address"
        />
        <input
          name="other-info"
          value=""
          type="text"
          placeholder="additional information (ie 'Ask for Jane')"
        />
        <button className="idea-submit">Submit</button>
        </div>
      )
  }
}

export default NewIdea;
