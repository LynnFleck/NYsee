import React, { Component } from 'react';
import firebase from '../../firebase.config.js';

class IdeaList extends Component {
  constructor() {
    super();

  }
  getIdea() {
    const allIdeas = firebase.database().ref('ideas');
    allIdeas.on("value", function(snapshot) {
      console.log(snapshot.val());
    });
  }

  render() {
    return (
      <div id="idea-list" className="clearfix">
        <ul>
          {this.getIdea()}
        </ul>
      </div>
    );
  };
}

export default IdeaList;
