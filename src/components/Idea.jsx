import React, { Component } from 'react';

class Idea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={this.props.uid} className="one-idea">
        <h2>{this.props.mainIdea}</h2>
          <p><em>{this.props.website}</em> |
            extra info: <em>{this.props.extraInfo}</em> <br />
            submitted by <em>{this.props.email}</em> |
            on <em>{this.props.dateSubmitted}</em>
          </p>
      </div>
      );
  }
}

export default Idea;

