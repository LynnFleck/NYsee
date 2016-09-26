import React, { Component } from 'react';

class Idea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={this.props.uid} className="one-idea">
        <h2>{this.props.mainIdea}</h2>
          <p>{this.props.website}
            {this.props.extraInfo}
            <em>submitted by</em> {this.props.email}
          </p>
      </div>
      );
  }
}

export default Idea;

