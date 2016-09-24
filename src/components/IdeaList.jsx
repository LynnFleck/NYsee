import React, { Component } from 'react';

class IdeaList extends Component {

  render() {
    return (
      <div id="idea-list" className="clearfix">
        <h1>This is the IdeaList page. This page IS protected</h1>
        <div id="one-idea">
          <h1>This is JUST ONE IDEA</h1>
          <div id={this.props.id}></div>
          <div>{this.props.mainIdea}</div>
          <div>{this.props.website}</div>
          <div>{this.props.screenName}</div>
        </div>
      </div>
      );
  };
}

export default IdeaList;
