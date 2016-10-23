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
          handleDelete={this.handleDeleteClick}
          setComplete={this.setIdeaToCompleted}
          complete={post.complete}
          />
        </div>
      );
    });
    return (
      <div>
        {postElements}
      </div>
    );
  }
}
export default IdeaList;


