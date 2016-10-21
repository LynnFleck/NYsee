import React, { Component } from 'react';
import request from 'superagent';
import Idea from './Idea.jsx';

class IdeaList extends Component {
  render() {
    const postElements = this.props.posts.map((post, idx) => {
      return (
        <div key={idx}>
          <Idea
          email={post.email}
          mainIdea={post.mainIdea}
          extraInfo={post.extraInfo}
          website={post.website}
          />
        </div>
      );
    });
    return (
      <div id="idea-list">
        <h1>Current list</h1>
        {postElements}
      </div>
    );
  }
}
export default IdeaList;


