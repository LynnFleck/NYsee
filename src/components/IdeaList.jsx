import React, { Component } from 'react';
import request from 'superagent';
import Idea from './Idea.jsx';

const propTypes = {
  setComplete: React.PropTypes.func,
};

class IdeaList extends Component {
  render() {
    const postElements = this.props.posts.map((post, idx) => {
      return (
        <div key={idx}>
          <Idea
          id={post.id}
          email={post.email}
          mainIdea={post.mainIdea}
          extraInfo={post.extraInfo}
          website={post.website}
          complete={post.complete}
          httpGetPosts={this.httpGetPosts}
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

IdeaList.propTypes = propTypes;

export default IdeaList;


